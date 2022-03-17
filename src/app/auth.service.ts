import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userdata=new BehaviorSubject(null) ;
  constructor() { }

}
