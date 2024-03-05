import {Component, ElementRef, Renderer2 } from '@angular/core';
import { LogoutService } from 'src/app/services/serviceLogout/logout.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
      public menuUser: string[] = ['Dashboard', 'Settings', 'Earnings', 'Sign Out']
      isDropdownOpen: boolean = false;


      constructor(private elementRef: ElementRef,  private renderer: Renderer2) {}

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
  
}


