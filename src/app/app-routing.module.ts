import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { IngredientesComponent } from './ingredientes/ingredientes.component';
import { CdiComponent } from './cdi/cdi.component';
import { RepresentadasComponent } from './representadas/representadas.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'ingredientes', component: IngredientesComponent },
  { path: 'cdi', component: CdiComponent },
  { path: 'representadas', component: RepresentadasComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}