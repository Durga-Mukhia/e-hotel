import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/Shared/hotel.service';
import { Hotel } from 'src/app/admin/portal/hotel/hotel.model';
import { HttpClient } from '@angular/common/http';
import { BookingService } from '../booking-details/booking.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  allHotels;
  bookingForm:FormGroup;
  success=false;

  constructor(
    private hotelService:HotelService, 
    private http:HttpClient, 
    private bookingService:BookingService,
    private fb:FormBuilder
    ) { }

  ngOnInit() { 
    this.getAllHotels();
    this.buildForm();
   }

   buildForm(){
    this.bookingForm = this.fb.group({
      hotelName: ['',[ Validators.required]],
      check_in_date: ['',[Validators.required]],
      check_out_date : ['', [Validators.required]],
      number_of_guest: ['',[Validators.required]],
      number_of_rooms: ['', [Validators.required]],
      status:false
    });
  }


  getAllHotels(){
    this.hotelService.getAllHotels()
    .subscribe((res:Array<any>)=>{
      this.allHotels=res
    });
  }


  submitBookings() {
    this.bookingService.submitBookings(this.bookingForm.value)    
    .subscribe(
      () => {
        this.success = true
      },
       err => console.log(err)   
    );
  }
}