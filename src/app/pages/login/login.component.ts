import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  // make this component standalone and import FormsModule so `[(ngModel)]` is available
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Simple authentication - store token
    localStorage.setItem('auth_token', 'demo-token-' + Date.now());
    
    // Redirect to dashboard
    this.router.navigate(['/dashboard']);
  }
}