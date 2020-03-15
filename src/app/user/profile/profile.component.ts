import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Shared/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userDetail;

  constructor(private userService:SharedService) { }

  ngOnInit() {
    this.userDetail = JSON.parse(localStorage.getItem('token'));
  }

}
