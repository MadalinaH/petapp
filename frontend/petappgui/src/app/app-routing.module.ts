import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './auth/landing-page/landing-page.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './main/home/home.component';
import { PetListComponent } from './main/pet-list/pet-list.component';
import { PetInfoComponent } from './main/pet-info/pet-info.component';
import { AppointmentListComponent } from './main/appointment-list/appointment-list.component';
import { AppointmentInfoComponent } from './main/appointment-info/appointment-info.component';
import { AppointmentFormComponent } from './main/appointment-form/appointment-form.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'auth',
    children: [
      { path: '', component: LandingPageComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]},
  { path: 'main',
    children: [
      { path: '', component: HomeComponent },
      { path: 'pets', component: PetListComponent },
      { path: 'pet-info', component: PetInfoComponent },
      { path: 'appointments', component: AppointmentListComponent },
      { path: 'appointment-info', component: AppointmentInfoComponent },
      { path: 'add-appointment', component: AppointmentFormComponent },
      { path: 'edit-appointment', component: AppointmentFormComponent }
    ]}
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule {

}
