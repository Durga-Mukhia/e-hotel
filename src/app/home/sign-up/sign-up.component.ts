import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HomeService} from '../home.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  success = false;
  value;
  constructor(
    private fb: FormBuilder, 
    private homeService: HomeService, 
    private router: Router
    ) {}

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.signUpForm = this.fb.group({
      username: ['',[Validators.required]],
      contact: ['',[Validators.required, Validators.minLength(8)]],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]],
      role : [''],
      permissionAccess: false
    });
  }
  submit() {
    this.homeService.createUsers(this.signUpForm.value).subscribe(
      () => {
        this.success = true,
          setTimeout( () => this.router.navigate(['/home/logIn']), 1000);
      },
       err => console.log(err)
      );
  }

  get email(){
    return this.signUpForm.get('email');
  }

  get password(){
    return this.signUpForm.get('password');
  }

  get contact(){
    return this.signUpForm.get('contact');
  }

  get username(){
    return this.signUpForm.get('username');
  }
}
