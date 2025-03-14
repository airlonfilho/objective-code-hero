import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: '**',
        loadComponent: () => import('./pages/error/error.component').then(m => m.ErrorComponent)
      }
];
