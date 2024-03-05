import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AlertPhotosComponent } from '../components/alert-photos/alert-photos.component';
import { ListAplicationService } from 'src/app/services/serviceListAplication/list-aplication.service';

@Component({
  selector: 'app-validate-student',
  templateUrl: './validate-student.component.html',
  styleUrls: ['./validate-student.component.css']
})
export class ValidateStudentComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'middleName', 'lastName', 'secondLastName', 'identification', 'status', 'action'];
  dataSource: MatTableDataSource<any>;
  errorMessage: string | undefined;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private listApplicationService: ListAplicationService) {
    this.dataSource = new MatTableDataSource<any>([]);
  }

  ngOnInit() {
    this.loadDataFromService();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, applicationId: string): void {
    this.dialog.open(AlertPhotosComponent, {
      width: '65rem',
      height: '27rem',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {applicationId},
      
    });
    console.log(applicationId);
  }

  loadDataFromService() {
    this.listApplicationService.getApplications().subscribe(
      (data: any[]) => {
        this.dataSource.data = data;
       
      },
      (error) => {
        console.error(error);
        this.errorMessage = 'Error al obtener los datos del servidor'
      }
    );
  }
}
