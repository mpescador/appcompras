import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AutenticationService } from './autentication.service';

@Injectable()
export class GuardService implements CanActivate {

  constructor(private autenticationService: AutenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.autenticationService.isAuthenticated();
  }

}
