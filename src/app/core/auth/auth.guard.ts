import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private router: Router) {}

  canActivate(): boolean {
    return this.checkAuth();
  }

  canLoad(): boolean {
    return this.checkAuth();
  }

  private checkAuth(): boolean {
    const token = localStorage.getItem('auth_token');
    if (token) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}