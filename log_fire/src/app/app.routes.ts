import { Routes } from '@angular/router';

import loginComponent from './components/login/login.component';
import BienvenidaComponent from './components/bienvenida/bienvenida.component';
import RegisterComponent from './components/register/register.component';

export const routes: Routes = [
    {
        path: 'bienvenida',
        //loadChildren: () => import('./components/bienvenida/bienvenida.module').then(m => m.BienvenidaModule),
        component: BienvenidaComponent,
    },
    {
        path: 'login',
        //loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule),
        component: loginComponent,
    },
    {
        path: 'register',
        //loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule),
        component: RegisterComponent,
    },
    {
        path: '**',
        //loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule),
        component: BienvenidaComponent,
    }
];
