import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  // DashboardComponent is standalone, so it must NOT be declared.
  // Standalone components are imported instead of declared.
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DashboardComponent
  ]
})
export class DashboardModule {}