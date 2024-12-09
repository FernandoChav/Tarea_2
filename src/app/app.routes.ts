import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        pathMatch: 'full',
        loadComponent: () => import('../app/Portfolio/Pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];
