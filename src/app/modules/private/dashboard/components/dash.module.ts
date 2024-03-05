import { NgModule } from "@angular/core";
import { ContenidoComponent } from "./contenido/contenido.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "src/app/app-routing.module";
import { MaterialModule } from "src/app/modules/material/material.module";


@NgModule({
    declarations:[
        ContenidoComponent,
        NavbarComponent,
        SidebarComponent
    ],
    imports:[
        CommonModule,
         AppRoutingModule,
          
    ],
    exports: [
        ContenidoComponent,
        NavbarComponent,
        SidebarComponent
    ]
})

export class DashModule {}