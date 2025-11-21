// For server-side execution, load the Node-specific Zone.js bundle
import 'zone.js/node';

import { platformServer } from '@angular/platform-server';
import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './app/core/interceptors/auth.interceptors';

// create server platform if needed by your SSR runtime
platformServer();

export default function bootstrap(context: BootstrapContext) {
  return bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(BrowserModule, AppRoutingModule, FormsModule),
      provideHttpClient(withInterceptors([authInterceptor]))
    ]
  }, context);
}