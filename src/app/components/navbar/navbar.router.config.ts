export interface RouteItem {
  label: string;
  path: string;
}

export interface RoutesConfig {
  [key: string]: RouteItem[];
}

export const routesConfig: RoutesConfig = {
  images: [
    {
      label: 'native',
      path: '/native',
    },
    {
      label: 'optimized',
      path: '/optimized',
    },
  ],
  standalone: [
    {
      label: 'standalone',
      path: '/standalone',
    },
  ],
  types: [
    {
      label: 'untyped',
      path: '/untyped',
    },
    {
      label: 'typed',
      path: '/typed',
    },
  ],
  sintaxys: [],
  signals: [],
  deferrable: [],
};
