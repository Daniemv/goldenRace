import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowNumberComponent } from './show-number.component';



@NgModule({
  declarations: [
    ShowNumberComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ShowNumberComponent]
})
export class ShowNumberModule { }
