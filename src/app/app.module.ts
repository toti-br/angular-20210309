import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LukffComponent } from './lukff/lukff.component';
import { IramarvasquezComponent } from './iramarvasquez/iramarvasquez.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, LukffComponent, IramarvasquezComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
