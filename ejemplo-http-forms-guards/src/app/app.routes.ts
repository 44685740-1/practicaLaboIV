import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import HomeComponent from './components/home/home.component';
import ComunidadComponent from './components/comunidad/comunidad.component';
import AdminComponent from './components/admin/admin.component';
import { logueadoGuard } from './guards/logueado.guard';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./components/home/home.component'),
        canActivate: [logueadoGuard]
    },
    {
        path: 'admin',
        loadComponent: () => import('./components/admin/admin.component'),
    },
    {
        path: '**',
        loadComponent: () => import('./components/comunidad/comunidad.component'),
    }
];


