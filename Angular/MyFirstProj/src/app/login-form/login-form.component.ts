import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  user = {email:'',password:'',username:''};
 

  constructor(private ds:DataServiceService) { }

  ngOnInit(): void {
  }

  form = {
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  };

  onSubmit(): void {
    console.log(JSON.stringify(this.form, null, 2));
  }

  onReset(form: NgForm): void {
    form.reset();
  }

}

