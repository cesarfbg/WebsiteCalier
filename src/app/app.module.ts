import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { IngredientesComponent } from './ingredientes/ingredientes.component';
import { CdiComponent } from './cdi/cdi.component';
import { RepresentadasComponent } from './representadas/representadas.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientesComponent,
    CdiComponent,
    RepresentadasComponent,
    NosotrosComponent,
    ContactoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
