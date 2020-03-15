import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Shared/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users;

  constructor(private userService:SharedService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers()
    .subscribe((res:Array<any>)=>{
      this.users = res.filter(value => value.role === 'admin')
    });
  }
}
