import { Component, OnInit } from '@angular/core';
import { AutenticationService } from '../servicios/autentication.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private autenticacionService: AutenticationService) { }

  ngOnInit() {
  }

  isAuth() {
    return this.autenticacionService.isAuthenticated();
  }

}
