import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private _Router:Router,
    private _AuthService:AuthService
  ){ }

  public register:FormGroup=new FormGroup({
    email:new FormControl(null, [Validators.email, Validators.required]),
    password:new FormControl(null,[ Validators.required , Validators.minLength(5), Validators.maxLength(10)]),
  });


  signp(){
    const {email,password}=this.register.value
    this._AuthService.signup(email,password).then(_=>{
    this._Router.navigate([`home`])
  })
  }
  ngOnInit(): void {}
}
