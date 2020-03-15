import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/Shared/hotel.service';
import { Hotel } from '../hotel/hotel.model';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  allHotels:Hotel[];
  constructor(
    private hotelServcie:HotelService
  ) { }

  ngOnInit() {
    this.getAllHotels();
  }
  getAllHotels(){
    this.hotelServcie.getAllHotels().subscribe(
      (data:Hotel[])=>{
        this.allHotels=data;
      });
  }
  
  deleteHotel(id:number){
    //console.log(id);
    this.hotelServcie.deleteHotel(id).subscribe(
      (data:Hotel)=>{
        this.getAllHotels();
    });  
  }


  edit(hotel){
    this.hotelServcie.currentHotel=Object.assign({},hotel);
  }
}
