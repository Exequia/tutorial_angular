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
  syntax: [
    {
      label: 'legacy',
      path: '/legacy',
    },
    {
      label: 'newSyntax',
      path: '/new-syntax',
    },
  ],
  signals: [
    {
      label: 'changeDetector',
      path: '/change-detector',
    },
    {
      label: 'signal',
      path: '/signal',
    },
  ],
  deferrable: [],
};
