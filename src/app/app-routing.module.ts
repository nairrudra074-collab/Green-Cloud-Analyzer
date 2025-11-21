import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './pages/landing/hero.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}