import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'my-stencil',
  globalStyle:'www/tailwind.css',
  outputTargets: [
    // {
    //   type: 'dist',
    //   esmLoaderPath: '../loader',
    // },
    // {
    //   type: 'dist-custom-elements',
    // },
    // {
    //   type: 'docs-readme',
    // },
    {
      type: 'www',
      empty:false,
      serviceWorker: null, // disable service workers
    },
  ],
};
