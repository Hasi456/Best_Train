import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import{ AuthService} from './auth.service';
import { from } from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Authguard implements CanActivate{

  constructor(private authservice:AuthService, private router:Router ) { };
/*
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.authservice.isAuthenticated();
  }*/

  canActivate() {
    if (this.authservice.isAuthenticated()) {
      this.router.navigate(['/']);
    }
    return !this.authservice.isAuthenticated();
  }
}




