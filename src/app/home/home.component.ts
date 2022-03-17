import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content:any=``
  str: string = ''
  constructor(
    private _AngularFirestore:AngularFirestore) { }

  send(){
    let paragraph = document.getElementsByTagName("p")[0]

    this._AngularFirestore.collection(`froala`).doc(`form`).update({
    content: paragraph.innerHTML
    })
  }

  ngOnInit(): void {
    this._AngularFirestore.collection(`froala`).valueChanges().subscribe((data=>{
      this.content=data[0];
      this.str = this.content.content
      document.addEventListener("DOMContentLoaded", () => {
        document.getElementsByTagName("p")[0].innerHTML= this.str
      });
    }))
  }

}
