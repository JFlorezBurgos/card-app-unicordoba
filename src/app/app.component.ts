import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/serviceauth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car-app-web';
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.setAuthenticationStatus();
  }
}