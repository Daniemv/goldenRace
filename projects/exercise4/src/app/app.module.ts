import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GridLayoutModule } from './components/grid-layout/grid-layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GridLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
