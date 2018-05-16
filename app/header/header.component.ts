import { Component, OnInit } from '@angular/core';
import { AutenticationService } from '../servicios/autentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private autenticationService: AutenticationService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  isAuth() {

    return this.autenticationService.isAuthenticated();
  }

  onLogout() {
    this.autenticationService.logout();
    this.router.navigate(['/inicio']);
  }

}
