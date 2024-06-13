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
    path: 'main/syntax',
    loadComponent: () => import('./views/syntax/syntax.component'),
  },
  {
    path: 'main/deferrable',
    loadComponent: () => import('./views/deferrable/deferrable.component'),
  },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
];
