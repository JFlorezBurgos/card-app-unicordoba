import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './modules/public/auth/login/page/login-page.component';
import { InfoAlertsComponent } from './modules/public/auth/login/components/info-alerts/info-alerts.component';
import { FormLoginComponent } from './modules/public/auth/login/components/form-login/form-login.component';
import { DashboardLayoutComponent } from './modules/private/dashboard/layouts/dashboard-layout/dashboard-layout.component';
import { HomePageComponent } from './modules/private/dashboard/pages/home-page/home-page.component';
import { CardInfoComponent } from './modules/public/pages/card-info/card-info.component';
import { ViewUsersComponent } from './modules/private/dashboard/pages/view-users/view-users.component';
import { DashModule } from './modules/private/dashboard/components/dash.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { AlertPhotosComponent } from './modules/private/dashboard/pages/components/alert-photos/alert-photos.component';
import { ValidateStudentComponent } from './modules/private/dashboard/pages/validate-student/validate-student.component';
import { AuthService } from './services/serviceauth/auth.service';
import { FormsModule } from '@angular/forms';
import { LogoutService } from './services/serviceLogout/logout.service';
import { CookieService } from 'ngx-cookie-service';






@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    InfoAlertsComponent,
    FormLoginComponent,
    DashboardLayoutComponent,
    HomePageComponent,
    CardInfoComponent,
    ViewUsersComponent,
    AlertPhotosComponent,
    ValidateStudentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DashModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  exports:[
    InfoAlertsComponent,
    FormLoginComponent,
    DashboardLayoutComponent,
    CardInfoComponent,
    ViewUsersComponent,
    
  ],
  providers: [AuthService, LogoutService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
