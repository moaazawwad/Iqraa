import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { promises } from 'dns';
import { Observable } from 'rxjs';
// import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  // isLoggedIn:boolean=false
  constructor(
    // private _HomeComponent:HomeComponent,
    private _Router:Router,
private _authService:AuthService
  ){}
  canActivate(

    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //   return new Promise (resolve=>{
    //     this._authService.user.subscribe(user=>{
    //       if (user) resolve(true);
    //       else this._Router.navigate([`/login`])
    //       resolve(false)
    //     })
    //   })
    // }
return true
  }
    }    // return new Promise (resolve=>{
    //   this._authService.user.subscribe(user=>{
    //     if (user) resolve(true)
    //     else this._Router.navigate([`/login`])
    //     resolve(false)
    //   })
    // })
//   }

// }



// this._authService.user.subscribe((user) => {
//   if (user) {
//     this. isLoggedIn = true;
//     return true
//   }
//   else {
//     this.isLoggedIn = false;
//     return false

//   }
// })
// return this.isLoggedIn
