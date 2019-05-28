import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComponenteAComponent} from './componente-a/componente-a.component';
import {ComponenteBComponent} from './componente-b/componente-b.component';

const routes: Routes = [
  { path: 'componente-b', component: ComponenteBComponent },
  { path: 'componente-a', component: ComponenteAComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
