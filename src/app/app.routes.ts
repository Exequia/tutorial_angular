import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./views/home/home.component') },
  {
    path: 'images',
    loadComponent: () => import('./views/images/images.component'),
    children: [
      { path: '', redirectTo: 'native', pathMatch: 'full' },
      {
        path: 'native',
        loadComponent: () =>
          import('./components/image-native/image-native.component'),
      },
      {
        path: 'optimized',
        loadComponent: () =>
          import('./components/image-optimized/image-optimized.component'),
      },
    ],
  },
  {
    path: 'standalone/standalone',
    loadComponent: () => import('./views/standalone/standalone.component'),
  },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
];
