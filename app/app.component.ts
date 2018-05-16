import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCtB3KZdLmhf1BKPqEYQyddy0fL0nn3sOc',
      authDomain: 'comprasapp-53147.firebaseapp.com',
      databaseURL: 'https://comprasapp-53147.firebaseio.com',
      projectId: 'comprasapp-53147',
      storageBucket: 'comprasapp-53147.appspot.com',
      messagingSenderId: '797709593003'
    });
  }

}
