import { Injectable }    from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot,RouterStateSnapshot, CanActivateChild, NavigationExtras } from '@angular/router';
import { Observable }    from 'rxjs/Observable';

export interface LoginCheckActivate {
    canActivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable()
export class LoginCheck implements CanActivate, CanActivateChild  {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log('로그인 체크');
        return true;
    }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }    
}