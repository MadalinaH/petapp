import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetInfoComponent } from './pet-info/pet-info.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [];

@NgModule({
  declarations: [PetListComponent, PetInfoComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class MainModule { }
