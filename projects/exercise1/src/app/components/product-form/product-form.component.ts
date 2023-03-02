import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  public productForm!: FormGroup;
  public showValidationErrors: boolean = false;
  public showSuccessMessage: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  get productName() {
    return this.productForm.get('productName');
  }

  get price() {
    return this.productForm.get('price');
  }

  ngOnInit(): void {
    this.initForms();
  }

  /**
   * @name submitForm
   * @description
   * This method is called when the form is submitted and show success message or validation errors
   * depending on whether the form is valid or not
   * @memberof ProductFormComponent
   */
  public submitForm(): void {
    this.showValidationErrors = false;
    this.productForm.valid ? this.showSuccessMessage = true : this.showValidationErrors = true;
  }

  /**
   * @name resetForm
   * @description
   * This method is called when the form is reset and set default values
   * validations variables and form elements
   * @memberof ProductFormComponent
   */
  public resetForm(): void {
    this.showValidationErrors = false;
    this.showSuccessMessage = false;
    this.productForm.reset({ productName: '', price: 0 });
  }

  /**
   * @name initForms
   * @description
   * Initializes the form
   * @private
   * @memberof ProductFormComponent
   */
  private initForms(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      price: [0, [Validators.required, Validators.min(5), Validators.max(20)]]
    });
  }

}
