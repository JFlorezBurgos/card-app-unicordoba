import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ListAplicationService } from 'src/app/services/serviceListAplication/list-aplication.service';

@Component({
  selector: 'app-alert-photos',
  templateUrl: './alert-photos.component.html',
  styleUrls: ['./alert-photos.component.css']
})
export class AlertPhotosComponent implements OnInit {
  profilePicture: string | undefined;
  identificationPicture: string | undefined;
 

  constructor(private listApplicationService: ListAplicationService, 
    public dialogRef: MatDialogRef<AlertPhotosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { applicationId: string }) { }

    ngOnInit(): void {
      const applicationId = this.data.applicationId;
  
      this.listApplicationService.getApplications().subscribe(
        (data: any) => {
          const application = data.find((item: any) => item._id === applicationId);
          if (application) {
            this.profilePicture = application.user_id.profile_picture;
            this.identificationPicture = application.user_id.identification_picture;
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }
  
    rejectApplication(): void {
      const applicationId = this.data.applicationId;
      const status = 'RECHAZADO';
  
      this.updateApplicationStatus(applicationId, status);
     
    }
  
    validateApplication(): void {
      const applicationId = this.data.applicationId;
      const status = 'VERIFICADO';
  
      this.updateApplicationStatus(applicationId, status);
      
    }
  
    private updateApplicationStatus(applicationId: string, status: string): void {
      this.listApplicationService.updateApplicationStatus(applicationId, status).subscribe(
        (response: any) => {
          console.log('Estado de la aplicación actualizado correctamente');
          // Realiza las acciones adicionales que necesites después de actualizar el estado
          this.dialogRef.close();
          window.location.reload();
          
        },
        (error) => {
          console.error(error);
          // Maneja el error de manera apropiada
        }
      );
    }
  }