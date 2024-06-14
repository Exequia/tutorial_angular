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
  {
    path: 'types',
    loadComponent: () => import('./views/types/types.component'),
    children: [
      { path: '', redirectTo: 'untyped', pathMatch: 'full' },
      {
        path: 'untyped',
        loadComponent: () => import('./components/untyped/untyped.component'),
      },
      {
        path: 'typed',
        loadComponent: () => import('./components/typed/typed.component'),
      },
    ],
  },
  {
    path: 'syntax',
    loadComponent: () => import('./views/syntax/syntax.component'),
    children: [
      { path: '', redirectTo: 'legacy', pathMatch: 'full' },
      {
        path: 'legacy',
        loadComponent: () => import('./components/legacy/legacy.component'),
      },
      {
        path: 'new-syntax',
        loadComponent: () =>
          import('./components/new-syntax/new-syntax.component'),
      },
    ],
  },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
];
