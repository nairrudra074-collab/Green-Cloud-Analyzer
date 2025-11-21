import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export interface User {
  id: string;
  email: string;
  name?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  // For demo / MVP we store a token in localStorage. For production prefer HttpOnly secure cookies + server session or short-lived JWT + refresh token.
  private tokenKey = 'verdantcloud_token';

  constructor(private http: HttpClient, private router: Router) {
    const token = localStorage.getItem(this.tokenKey);
    if (token) {
      // Optionally validate token with backend or decode it
      // For now assume token is valid and set a placeholder user (or fetch profile)
      this.fetchProfile().subscribe();
    }
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  login(email: string, password: string): Observable<boolean> {
    // Replace with your backend API call
    // Example:
    // return this.http.post<{ token: string }>('/api/auth/login', { email, password })
    //   .pipe(tap(res => this.setToken(res.token)), map(() => true));

    // Mock login for local dev/demo:
    return of({ token: 'mock-token-123' }).pipe(
      tap(res => this.setToken(res.token)),
      tap(() => this.currentUserSubject.next({ id: '1', email, name: 'Demo User' })),
      map(() => true)
    );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  private setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Optionally call backend to get current profile
  fetchProfile(): Observable<User | null> {
    // Replace with real API call, e.g. this.http.get<User>('/api/auth/me')
    const token = this.getToken();
    if (!token) {
      this.currentUserSubject.next(null);
      return of(null);
    }
    // Mock profile
    const user: User = { id: '1', email: 'demo@company.com', name: 'Demo User' };
    this.currentUserSubject.next(user);
    return of(user);
  }
}