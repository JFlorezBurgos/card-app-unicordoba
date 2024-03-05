import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceVerifiedService } from 'src/app/services/serviceVerified/service-verified.service';


@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent implements OnInit {
  datos?: any;
  errorMessage?: string;
  id!: string;

  constructor(private route: ActivatedRoute, private serviceVerified: ServiceVerifiedService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.serviceVerified.getData(this.id).subscribe(
      (response) => {
        this.datos = response;
        // Aquí puedes trabajar con la respuesta de la API
        console.log(response);
      },
      (error) => {
        this.errorMessage = 'Ha ocurrido un error al obtener los datos!!';
        console.error(error);
      }
    );
  }
}