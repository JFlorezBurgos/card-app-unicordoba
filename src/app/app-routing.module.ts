import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './modules/private/dashboard/pages/home-page/home-page.component';
import { LoginPageComponent } from './modules/public/auth/login/page/login-page.component';
import { CardInfoComponent } from './modules/public/pages/card-info/card-info.component';
import { ViewUsersComponent } from './modules/private/dashboard/pages/view-users/view-users.component';
import { ValidateStudentComponent } from './modules/private/dashboard/pages/validate-student/validate-student.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'home-page',
    component: HomePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'card-info/:id',
    component: CardInfoComponent,
    
  },
  {
    path: 'validate-student',
    component: ValidateStudentComponent,
    canActivate: [AuthGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
