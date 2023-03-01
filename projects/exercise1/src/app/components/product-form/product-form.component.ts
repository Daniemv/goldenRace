import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  productForm!: FormGroup;
  showValidationErrors: boolean = false;
  showSuccessMessage: boolean = false;

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

  initForms(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      price: [0, [Validators.required, Validators.min(5), Validators.max(20)]]
    });
  }

  submitForm(): void {
    this.showValidationErrors = false;
    this.productForm.valid ? this.showSuccessMessage = true : this.showValidationErrors = true;
  }

  resetForm(): void {
    this.showValidationErrors = false;
    this.showSuccessMessage = false;
    this.productForm.reset({ productName: '', price: 0 });
  }

}
