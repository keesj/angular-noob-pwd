import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PwdControlComponent } from './pwd-control/pwd-control.component';

@NgModule({
  declarations: [
    AppComponent,
    PwdControlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
