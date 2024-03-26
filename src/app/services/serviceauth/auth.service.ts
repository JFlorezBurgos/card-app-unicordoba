import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { of, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://unicorcard.herokuapp.com'; // Reemplaza con la URL del endpoint de autenticación
  private isAuthenticated: boolean = false;

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) {}

  setAuthenticationStatus() {
    this.isAuthenticated = this.isLoggedIn();
  }

  isLoggedIn(): boolean {
    return this.cookieService.check('token');
  }

  login(email: string, password: string): any {
    // Verificar las credenciales (simulación)
    if (email === 'juan@gmail.com' && password === '12345') {
      const response = {
        user: {
          // Datos del usuario simulados
        },
        token: 'TOKEN_SIMULADO',
      };
      return of(response); // Importa 'of' desde 'rxjs' para crear un observable simulado
    } else {
      return throwError('Credenciales Incorrectas'); // Importa 'throwError' desde 'rxjs' para simular un error
    }
  }


  logout() {
    this.cookieService.delete('token'); // Eliminar el token del almacenamiento local

    // Redireccionar a la página de inicio de sesión
    this.router.navigate(['/login']);
  }
}


  // constructor(private router: Router, private logoutService: LogoutService) {
  //   this.logoutService.logout$.subscribe(() => {
  //     this.logout();
  //   });
  // }



