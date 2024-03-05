import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertPhotosComponent } from '../components/alert-photos/alert-photos.component';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  
})
export class HomePageComponent {
  constructor(public dialog: MatDialog) {}
  
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AlertPhotosComponent, {
      width: '40rem', height: '25rem',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}