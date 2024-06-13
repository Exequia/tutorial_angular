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
  other: [
    {
      label: 'other',
      path: '/other',
    },
  ],
};
