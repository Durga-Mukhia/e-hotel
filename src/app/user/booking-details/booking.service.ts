import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }


  getBookings(){
    return this.http.get('http://localhost:3000/bookings');
  }  

  submitBookings(hotelData){
    return this.http.post('http://localhost:3000/bookings',hotelData);
  }
 
  approveBooking(id, hotelData1){
    return this.http.put(`http://localhost:3000/bookings/${id}`, hotelData1);
  }

}
