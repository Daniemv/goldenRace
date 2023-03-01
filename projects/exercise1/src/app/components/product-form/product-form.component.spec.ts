import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductFormComponent } from './product-form.component';

describe('ProductFormComponent', () => {
  let component: ProductFormComponent;
  let fixture: ComponentFixture<ProductFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ProductFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('On ngOnInit', () => {
    it('should initialize product form', () => {
      component.ngOnInit();
      expect(component.productForm).toBeDefined();
    });
  });

  describe('On submitForm', () => {
    it('should show success message when form is valid and submitted', () => {
      component.ngOnInit();
      const productName = 'My Product';
      const price = '15';
      component.productForm.controls['productName'].setValue(productName);
      component.productForm.controls['price'].setValue(price);
      component.submitForm();
      expect(component.showValidationErrors).toBeFalsy();
      expect(component.showSuccessMessage).toBeTruthy();
    });

    it('should show validation errors when form is invalid and submitted', () => {
      component.ngOnInit();
      const productName = 'My';
      const price = '100';
      component.productForm.controls['productName'].setValue(productName);
      component.productForm.controls['price'].setValue(price);
      component.submitForm();
      expect(component.showValidationErrors).toBeTruthy();
      expect(component.showSuccessMessage).toBeFalsy();
    });
  });

  describe('On resetForm', () => {
    it('should hide all messages and reset product form to default values', () => {
      component.resetForm();
      expect(component.showValidationErrors).toBeFalsy();
      expect(component.showSuccessMessage).toBeFalsy();
      expect(component.productForm.controls['productName'].value).toBe('');
      expect(component.productForm.controls['price'].value).toBe(0);
    });
  });
});
