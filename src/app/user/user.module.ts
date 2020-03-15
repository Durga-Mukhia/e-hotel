import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PortalComponent } from './portal/portal.component';
import { ProfileComponent } from './profile/profile.component';
import {UserComponent} from './user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingDetailsComponent } from './booking-details/booking-details.component';


@NgModule({
  declarations: [PortalComponent, ProfileComponent, UserComponent, BookingDetailsComponent,BookingDetailsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
