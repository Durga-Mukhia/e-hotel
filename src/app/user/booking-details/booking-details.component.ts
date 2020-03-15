import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';


@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  bookings;
  userBookingDetail;
  userBookingId;
 
  constructor(
    private bookingService:BookingService,
    ) { }

  ngOnInit() {
    this.getBookings();
    this.userBookingDetail=JSON.parse(localStorage.getItem('token'));
    this.userBookingId=this.userBookingDetail.id;
  }

  getBookings(){
    this.bookingService.getBookings()
    .subscribe((res:Array<any>)=>{
    this.bookings =res.filter(data=>data.status===true && data.user_id===this.userBookingId);
    });  
  }
}
