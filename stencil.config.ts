import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'ionicpwaelements',
  bundles: [
    { components: ['ion-icon', 'ion-action-sheet-controller', 'ion-action-sheet',
                   'ion-modal-controller', 'ion-modal', 'ion-animation-controller',
                   'ion-toast-controller', 'ion-toast'] },
    { components: ['ion-pwa-camera-modal', 'ion-pwa-camera', 'ion-pwa-action-sheet'] }
  ],
  plugins: [
    sass()
  ],
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www'
    }
  ]
};