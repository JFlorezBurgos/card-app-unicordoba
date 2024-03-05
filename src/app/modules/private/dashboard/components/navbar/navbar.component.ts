import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { LogoutService } from 'src/app/services/serviceLogout/logout.service';
import { AuthService } from 'src/app/services/serviceauth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
      public menuUser: string[] = ['Sign Out']
      isDropdownOpen: boolean = false;

      constructor(private elementRef: ElementRef,  private renderer: Renderer2, private logoutService: LogoutService,  private authService: AuthService) {}

      ngOnInit() {
        this.renderer.listen('document', 'click', (event: MouseEvent) => {
          if (!this.elementRef.nativeElement.contains(event.target)) {
            this.isDropdownOpen = false;
          }
        });
      }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  logout() {
    // Llamar al método para notificar el cierre de sesión
    this.logoutService.triggerLogout();

    this.authService.logout();
  }
}
