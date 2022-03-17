import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean = false;
  constructor( private _Router:Router,
    private _AngularFireAuth:AngularFireAuth,
private _authService:AuthService
    ) { }

 LogOut(){
 this._AngularFireAuth.signOut();
 this._Router.navigate([`login`])

}
  ngOnInit(): void {
    this._authService.user.subscribe((user) => {
      if (user) {
        this.isLoggedIn = true;
      }
      else {
        this.isLoggedIn = false;
      }
    });

  }

}
