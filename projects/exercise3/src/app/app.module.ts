import { ShowNumberModule } from './components/show-number/show-number.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShowNumberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
