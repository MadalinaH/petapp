import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { AppointmentInfoComponent } from './appointment-info/appointment-info.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { HomeComponent } from './home/home.component';
import { PetInfoComponent } from './pet-info/pet-info.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { ApiService } from '../api.service';
import { SharedModule } from '../shared/shared.module';
import { PetFormComponent } from './pet-form/pet-form.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppointmentFormComponent,
    AppointmentInfoComponent,
    AppointmentListComponent,
    HomeComponent,
    PetInfoComponent,
    PetListComponent,
    PetFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  exports: [RouterModule],
  providers: [ApiService]
})

export class MainModule {}
