import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iht-app';
  constructor () {
    var firebaseConfig = {
      apiKey: "AIzaSyBtHAtUueo-7kTOFyq_GQN8KWTDtf5Ppjs",
      authDomain: "iht-app.firebaseapp.com",
      databaseURL: "https://iht-app.firebaseio.com",
      projectId: "iht-app",
      storageBucket: "iht-app.appspot.com",
      messagingSenderId: "347170107353",
      appId: "1:347170107353:web:ec16051e6ea93c26c2b3c8",
      measurementId: "G-6KMYFZ8LGV"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  
}
