import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductFormModule } from './components/product-form/product-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
