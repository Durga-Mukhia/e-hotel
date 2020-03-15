import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin.component';
import {PortalComponent} from './portal/portal.component';
import {ProfileComponent} from './profile/profile.component';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'adminPortal',
    component: PortalComponent
  },
  {
    path: 'adminProfile',
    component: ProfileComponent
  },
  {
    path: 'adminDashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
