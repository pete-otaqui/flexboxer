import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HtmlOutputComponent } from './html-output.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HtmlOutputComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
