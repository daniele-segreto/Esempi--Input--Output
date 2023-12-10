import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticoloComponent } from './components/articolo/articolo.component';
import { ContattoComponent } from './components/contatto/contatto.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticoloComponent,
    ContattoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
