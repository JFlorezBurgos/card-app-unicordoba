import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { AuthService } from 'src/app/services/serviceauth/auth.service';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  email: string | undefined;
  password: string | undefined;
  errorMessage: string | undefined;
  warningMessage: string | undefined;

  @ViewChild('loginForm') loginForm: any;

  constructor(private router: Router, private authService: AuthService) { }

  onSubmit() {
    if (this.email && this.password) {
      this.authService.login(this.email, this.password).subscribe(
        (response: { token: string; }) => {
          // Almacenar el token en localStorage
          localStorage.setItem('token', response.token);
          // Redireccionar a la página "home-page"
          this.router.navigate(['/home-page']);
        },
        (error: any) => {
          // Manejar el error de autenticación
          console.log(error);
          throwError('Error de autenticación');
          this.errorMessage = 'Email o Contraseña incorrecta. Intente nuevamente'
        }
      );
    } else {
      this.warningMessage = 'Debe ingresar un correo electrónico y una contraseña válidos'
    }
  }
}
//   onSubmit() {
//     const { email, password } = this.loginForm.value;

//     this.authService.login(email, password).subscribe(
//       (response: any) => {
//         // Almacenar el token en localStorage
//         localStorage.setItem('token', response.token);
//         // Redireccionar a la página "home-page"
//         this.router.navigate(['/home-page']);
//       },
//       (error: any) => {
//         // Manejar el error de autenticación
//         console.log(error);
//       }
//     );
//   }
// }
