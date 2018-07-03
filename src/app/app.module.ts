import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DngComponentsLibModule } from 'dng-components-lib';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DngComponentsLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
