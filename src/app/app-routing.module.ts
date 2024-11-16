import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
const routes: Routes = [
  { path: 'liste', component: ListeComponent },
  { path:'acceuil', component: AcceuilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
