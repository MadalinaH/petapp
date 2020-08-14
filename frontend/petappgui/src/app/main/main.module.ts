import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetInfoComponent } from './pet-info/pet-info.component';
import { HomeComponent } from './home/home.component';

import { ApiService } from '../api.service';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentInfoComponent } from './appointment-info/appointment-info.component';

const routes: Routes = [];

@NgModule({
  declarations: [PetListComponent, PetInfoComponent, HomeComponent, AppointmentListComponent, AppointmentInfoComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [ApiService]
})
export class MainModule { }
