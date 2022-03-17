import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})

export class PhotosComponent implements OnInit {
  file: any;
  allpic:any []  =[]

  constructor(private _AuthService:AuthService) {}

  public uploadPhoto:FormGroup=new FormGroup({
    photo:new FormControl(null, [ Validators.required]),
    title:new FormControl(null,[ Validators.required , Validators.minLength(5), Validators.maxLength(10)]),
  });

  addNewPhoto() {
    this._AuthService.get().subscribe(
    (data)=>{  this.allpic=data
      console.log(this.allpic);
    })
    return this._AuthService.addNewPhoto(this.uploadPhoto.value.title, this.file).then(d => console.log(d))/////
  }

  ngOnInit(): void {
    this._AuthService.get().subscribe(
    (data)=>{  this.allpic=data})
  }

  upload($event:any){
    this.file=$event.target.files[0]
  }

}
