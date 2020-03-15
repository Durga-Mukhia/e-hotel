import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HomeService} from '../home.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  logInForm: FormGroup;
  error = false;
  success = false;
  constructor(private fb: FormBuilder, private homeService: HomeService, private router: Router) { }

  ngOnInit(): void {
    this.buildLogInForm();
  }
  buildLogInForm() {
    this.logInForm = this.fb.group({
      email: [undefined, Validators.required],
      password: [undefined,Validators.required]
    });
  }
  login() {
    this.homeService.getUsers().subscribe((respond: Array<any>) => {
      const usersFromDataBase = respond;
      const user = usersFromDataBase.filter( data => data.email === this.logInForm.value.email
        && data.password === this.logInForm.value.password
        && data.permissionAccess) ;
      if (user.length) {
        localStorage.setItem('token', JSON.stringify(user[0]));
        this.success = true;
        setTimeout( () => this.router.navigate([`/${user[0].role}`]), 2000);
      } else  {
        this.error = true;
      }

    });

  }
  get email() {
    return this.logInForm.get('email');
  }
  get password() {
    return this.logInForm.get('password');
  }


}
