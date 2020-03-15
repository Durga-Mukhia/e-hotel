import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';


@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  bookings;
 
  constructor(
    private bookingService:BookingService,
    ) { }

  ngOnInit() {
    this.getBookings();
  }

  getBookings(){
    this.bookingService.getBookings()
    .subscribe((res:Array<any>)=>{
    this.bookings =res.filter(data=>data.status==true);
    });  
  }
}
