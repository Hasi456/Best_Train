import { Component, OnInit } from '@angular/core';
//import {FlashMessagesService} from 'angular2-flash-messages';
import *as firebase from 'firebase';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  token:string;

  constructor(private authservice:AuthService, private router:Router)
  {}

  ngOnInit(){
    firebase.initializeApp(

      {
        apiKey: "AIzaSyDfJkDDYsW8pgW7mcQH74-Ov3qOPkL08Jc",
        authDomain: "best-train-admin.firebaseapp.com",
       /* databaseURL: "https://best-train-admin.firebaseio.com",
        projectId: "best-train-admin",
        storageBucket: "best-train-admin.appspot.com",
        messagingSenderId: "783456961010",
        appId: "1:783456961010:web:82499a2f483648de11eb6b"*/

      }


    )


    }
      
   onSignOut(){

    this.authservice.signOut();
      }
  
      checkUserLoggedIn(){
        return localStorage.getItem('isLoggedIn')? true: false;
      }

  


}
