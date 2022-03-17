import { Component } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(
    private _Router:Router,
    private _AuthService:AuthService
  ) {}

  public loginform:FormGroup=new FormGroup({
    email:new FormControl(null, [Validators.email, Validators.required]),
    password:new FormControl(null,[ Validators.required , Validators.minLength(5), Validators.maxLength(10)]),
  });

  login(){
    const { email,password } = this.loginform.value
    this._AuthService.login(email,password).then(_=>{
      this._Router.navigate([`home`])
    })
  }

  signUpByGoogle(){
    this._AuthService.signUpByGoogle().then(()=>{
      this._Router.navigate([`home`])
    })
  }

}
