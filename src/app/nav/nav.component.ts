import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {AuthService} from '../services/auth.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isAuth: boolean;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user){
          this.isAuth = true;
        }else{
          this.isAuth = false;
        }
      }
    );
  }
  onSignOut(){
    this.authService.signOutUser();
  }

}
