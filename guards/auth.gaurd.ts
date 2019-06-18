import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from
    '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
    token: string;
    constructor(
        private myRoute: Router) {
    }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        this.token = localStorage.getItem("ParkAccessToken");
        if (this.token && state.url !== '/login') {
            return true;
        } else {
            this.myRoute.navigate(["login"]);
            return false;
        }
    }
}