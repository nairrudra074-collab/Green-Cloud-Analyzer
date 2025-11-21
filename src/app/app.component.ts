import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {}