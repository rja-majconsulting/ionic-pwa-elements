/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
/* tslint:disable */

import '@stencil/core';

import '@ionic/core';
import 'ionicons';




declare global {
  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}

  namespace StencilComponents {

    interface IonPwaActionSheet {

    }

    interface IonPwaCameraModal {
      'dismiss': () => Promise<void>;
      'present': () => Promise<void>;
    }

    interface IonPwaCamera {
      'facingMode': string;
    }
  }


    interface HTMLIonPwaActionSheetElement extends StencilComponents.IonPwaActionSheet, HTMLStencilElement {}

    var HTMLIonPwaActionSheetElement: {
      prototype: HTMLIonPwaActionSheetElement;
      new (): HTMLIonPwaActionSheetElement;
    };
    

    interface HTMLIonPwaCameraModalElement extends StencilComponents.IonPwaCameraModal, HTMLStencilElement {}

    var HTMLIonPwaCameraModalElement: {
      prototype: HTMLIonPwaCameraModalElement;
      new (): HTMLIonPwaCameraModalElement;
    };
    

    interface HTMLIonPwaCameraElement extends StencilComponents.IonPwaCamera, HTMLStencilElement {}

    var HTMLIonPwaCameraElement: {
      prototype: HTMLIonPwaCameraElement;
      new (): HTMLIonPwaCameraElement;
    };
    

  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {
    'ion-pwa-action-sheet': JSXElements.IonPwaActionSheetAttributes;
    'ion-pwa-camera-modal': JSXElements.IonPwaCameraModalAttributes;
    'ion-pwa-camera': JSXElements.IonPwaCameraAttributes;
    }
  }

  namespace JSXElements {

    export interface IonPwaActionSheetAttributes extends HTMLAttributes {

    }

    export interface IonPwaCameraModalAttributes extends HTMLAttributes {
      'onOnPhoto'?: (event: CustomEvent) => void;
    }

    export interface IonPwaCameraAttributes extends HTMLAttributes {
      'facingMode'?: string;
      'onOnPhoto'?: (event: CustomEvent) => void;
    }
  }

  interface HTMLElementTagNameMap {
    'ion-pwa-action-sheet': HTMLIonPwaActionSheetElement
    'ion-pwa-camera-modal': HTMLIonPwaCameraModalElement
    'ion-pwa-camera': HTMLIonPwaCameraElement
  }

  interface ElementTagNameMap {
    'ion-pwa-action-sheet': HTMLIonPwaActionSheetElement;
    'ion-pwa-camera-modal': HTMLIonPwaCameraModalElement;
    'ion-pwa-camera': HTMLIonPwaCameraElement;
  }
}
declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;
