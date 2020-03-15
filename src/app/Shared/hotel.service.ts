import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from '../admin/portal/hotel/hotel.model';

const headerOption = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class HotelService {


  hotelUrl='http://localhost:3000/hotels';

  currentHotel:Hotel={
    id:null,
    hotelName:'',
    contact:null,
    ratings:'',
    location:'',
    amenities:''
  };
  

  constructor(private http:HttpClient) { }

  getAllHotels():Observable<Hotel[]>{
    return this.http.get<Hotel[]>(this.hotelUrl, headerOption);
  }

  getHotel(id){
    return this.http.get(`hotelUrl/${id}`);
  }

  deleteHotel(id:number):Observable<Hotel>{
    return this.http.delete<Hotel>(this.hotelUrl + '/' +id,headerOption);
  }

  createHotel(hotel:Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(this.hotelUrl, hotel, headerOption);
  }

  updateHotel(hotel:Hotel):Observable<Hotel>{
    return this.http.put<Hotel>(this.hotelUrl + '/' +hotel.id, hotel, headerOption);
  }

}
