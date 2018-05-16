import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutenticationService } from '../../servicios/autentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inises',
  templateUrl: './inises.component.html',
  styleUrls: ['./inises.component.css']
})
export class InisesComponent implements OnInit {

  loginForm: FormGroup;
  userdata: any;

  mensaje = false;

  autenticando = false;

  constructor(private formBuilder: FormBuilder,
    private autenticationService: AutenticationService,
    private router: Router,
    private activatedRouter: ActivatedRoute) {

    }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': ['', [ Validators.required, Validators.email ]],
      'password': ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6)
      ]]
    });
  }

  onSumbit() {
    this.autenticando = true;
    this.userdata = this.saveUserData();
    this.autenticationService.inicioSesion(this.userdata);
    setTimeout(() => {
      if (this.isAuth() === false ) {
        this.mensaje = true;
        this.autenticando = false;
      }
    }, 2000);

  }

  saveUserData() {
    const saveUserData = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };

    return saveUserData;
  }

  isAuth() {
   return this.autenticationService.isAuthenticated();
  }

}