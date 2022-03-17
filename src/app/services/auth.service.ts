import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import * as moment from 'moment-timezone';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:Observable<any>
  constructor(
    private _AngularFireAuth:AngularFireAuth,
    private _Router:Router,
    private _AngularFirestore:AngularFirestore,
    private _AngularFireStorage:AngularFireStorage,
    private db:AngularFireDatabase,
  ) {
    this.user=_AngularFireAuth.user
    console.log(this.user)
  }

  login(email:string,password:string) {
    return this._AngularFireAuth.signInWithEmailAndPassword(email,password).then(_=>{
      this._Router.navigate([''])
    })
  }

  signUpByGoogle() {
    return this._AngularFireAuth.signInWithPopup(new GoogleAuthProvider)

  }

  logOut() {
    return this._AngularFireAuth.signOut();
  }


  signup(email:string,password:string){
    return this._AngularFireAuth.signInWithEmailAndPassword(email,password)
  }

  addNewPhoto(title: string, photo: File) {
    return new Promise((resolve) => {
      let ref = this._AngularFireStorage.ref('photos/' + photo.name);
      ref.put(photo).then(() => {
        ref.getDownloadURL().subscribe((photoUrl) => {
          this._AngularFirestore.collection('photos').add({
            title,
            photoUrl,
            // id :this._AngularFirestore.createId(),
            date:moment().valueOf()
          }).then( () => resolve('Success'));
        });
      });
    });
  }

// delete(){
//   // this._AngularFirestore.doc("lKjNIwEkjP537Ela6fhJ").delete();

//   // this._AngularFireStorage.ref('photos/'+this.aa).delete()
// }


  get(){
    return this._AngularFirestore.collection(`photos`).valueChanges()
  }

}
