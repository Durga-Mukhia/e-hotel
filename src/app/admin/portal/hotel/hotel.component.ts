import { Component, OnInit } from '@angular/core';
import { Hotel } from './hotel.model';
import { HotelService } from 'src/app/Shared/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  constructor(private hotelService:HotelService) { }


  ngOnInit() { 
   }
  

    clear(){
      this.hotelService.currentHotel={
        id:null,
        hotelName:'',
        contact:null,
        ratings:'',
        location:'',
        amenities:''
      }
    }

    //adding and updating a hotel
  createHotel(currentHotel: Hotel) {
    if (currentHotel.id === null) {
      //console.log('Create');
      this.hotelService.createHotel(currentHotel).subscribe(
        () => {
          this.hotelService.getAllHotels();
        });
    } 
    else {
      //console.log('Update');
      this.hotelService.updateHotel(currentHotel).subscribe(
        () => {
          this.hotelService.getAllHotels();
        });
    }
  }
}
