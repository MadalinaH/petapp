import { ApiService } from '../api.service';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { AppointmentInfoComponent } from './appointment-info/appointment-info.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { CommonModule } from '@angular/common';
import { ConfirmDialogService } from '../confirm-dialog.service';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { PetInfoComponent } from './pet-info/pet-info.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetFormComponent } from './pet-form/pet-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

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
  exports: [RouterModule],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  providers: [
    ApiService,
    ConfirmDialogService
  ]
})

export class MainModule {}