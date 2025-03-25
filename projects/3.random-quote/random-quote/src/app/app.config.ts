import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// Import necessary functions from Angular's core module:
// - ApplicationConfig: Used to define the configuration for the Angular application.
// - provideZoneChangeDetection: Enables Angular's change detection mechanism with options for optimizing performance.

import { provideRouter } from '@angular/router';
// Import provideRouter from Angular's router module to configure routing in the application.

import { provideHttpClient } from '@angular/common/http';
// Import provideHttpClient from Angular's HTTP module to configure HTTP client support in the app.

import { routes } from './app.routes';
// Import the application's route configuration from a separate file (app.routes.ts), which defines the available routes in the app.

export const appConfig: ApplicationConfig = {
  // Define the configuration object for the Angular application.
  providers: [
    // An array of providers needed by the app. Each provider is a function that configures different parts of the app.

    provideZoneChangeDetection({ eventCoalescing: true }),
    // Enables Angular's Zone.js change detection with event coalescing enabled.
    // This can help improve performance by grouping multiple events into a single change detection cycle.

    provideRouter(routes),
    // Configures Angular's router with the defined routes.
    // The 'routes' variable is expected to be an array of route configurations that define the paths and their associated components.

    provideHttpClient(),
    // Configures Angular's HTTP client to enable making HTTP requests in the app.
    // This is needed for services or components that need to interact with APIs.
  ],
};
