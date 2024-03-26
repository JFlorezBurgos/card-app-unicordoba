import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/serviceauth/auth.service';
// Reemplaza 'ruta-del-servicio-auth' con la ruta correcta del servicio AuthService

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

    canActivate(): boolean {
    console.log('AuthGuard canActivate() called');
    if (this.authService.isLoggedIn()) {
      console.log('User is logged in');
      return true;
    } else {
      console.log('User is not logged in');
      this.router.navigate(['/login']);
      return false;
    }
  }
}






