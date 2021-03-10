import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LukffComponent } from './lukff/lukff.component';
import { DiegoCelisTComponent } from './diego-celis-t/diego-celis-t.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, LukffComponent, DiegoCelisTComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
