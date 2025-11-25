import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  metrics = [
    { title: 'Total Carbon Emissions', value: '1,234 kg CO2', icon: '🌍', trend: '-12%' },
    { title: 'Active Resources', value: '45', icon: '☁️', trend: '+5%' },
    { title: 'Monthly Cost', value: '$2,345', icon: '💰', trend: '-8%' },
    { title: 'Efficiency Score', value: '87%', icon: '⚡', trend: '+15%' }
  ];

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('auth_token');
    this.router.navigate(['/login']);
  }
}
