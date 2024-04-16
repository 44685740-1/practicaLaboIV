import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component'; // Corrected import
import { LoginComponent } from './login/login.component'; // Corrected import
import { ErrorComponent } from './error/error.component'; // Corrected import

export const routes: Routes = [
  { path: 'bienvenido', component: BienvenidoComponent }, // Corrected component reference
  { path: 'login', component: LoginComponent }, // Corrected component reference
  { path: 'error', component: ErrorComponent } // Corrected component reference
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }