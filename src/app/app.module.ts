import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { authInterceptor } from './core/interceptors/auth.interceptors';
import { FormsModule } from '@angular/forms';

@NgModule({
  // This module is no longer the application bootstrapper.
  // Standalone components (AppComponent, HeroComponent, LoginComponent, ...) are
  // bootstrapped / imported via bootstrapApplication or imported individually where needed.
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
})
export class AppModule {}