import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { destroyPlatform } from '@angular/core';

// Ensure the platform is destroyed before bootstrapping again
if (typeof globalThis !== 'undefined' && (globalThis as any).ngPlatform) {
  destroyPlatform();
}

// Mark that the platform has been bootstrapped
(globalThis as any).ngPlatform = true;

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
