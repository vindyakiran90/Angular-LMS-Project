import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
    providedIn:'root'
})
export class AuthGuard implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const expectedRoles = route.data.role;
        const loginUserDetails = JSON.parse(localStorage.getItem('userBean'));
        let role;
        for(const index in expectedRoles){
            if(loginUserDetails && expectedRoles[index] === loginUserDetails.role){
                role = expectedRoles[index];
            }
        }
        if(loginUserDetails && loginUserDetails.role === role){
            return true;
        } else {
            return false;
        }
    }
}