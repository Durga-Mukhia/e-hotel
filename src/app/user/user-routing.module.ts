import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PortalComponent} from './portal/portal.component';
import {ProfileComponent} from './profile/profile.component';
import {UserComponent} from './user.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { AuthGuard } from '../guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'userPortal',
    component: PortalComponent,
  },
  {
    path: 'userProfile',
    component: ProfileComponent,
  },
  {
    path:'booking-details',
    component:BookingDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
