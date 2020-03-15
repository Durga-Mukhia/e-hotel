import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../Shared/shared.service';
import { BookingService } from 'src/app/user/booking-details/booking.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private sharedService: SharedService,
    private bookingService:BookingService
   ) { }

  users;
  acceptedUser;
  acceptedBooking;
  bookings;

  ngOnInit() {
    this.getUsers();
    this.getBookings();
  }
  
  getUsers() {
    this.sharedService.getUsers()
    .subscribe( (respondUsers: Array<any>) => {
    const usersdb = respondUsers;
    this.users = usersdb.filter(value => value.role === 'user' && !(!!value.permissionAccess));
    });
  }

  approve(user) {
    user.permissionAccess = true;
    this.sharedService.updateAccessPermission(user.id, user)
    .subscribe( res => {
      this.acceptedUser = res;
    });
  }

  getBookings(){
    this.bookingService.getBookings()
    .subscribe((res:Array<any>)=>{
      const bookingdb=res;
      this.bookings=bookingdb.filter(value=>!(!!value.status));

    });
  }

  approveBooking(booking){
  booking.status = true;
  this.bookingService.approveBooking(booking.id, booking )
  .subscribe(res=>{
    this.acceptedBooking=res;
    });
  }

}
