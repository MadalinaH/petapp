import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetInfoComponent } from './pet-info/pet-info.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [PetListComponent, PetInfoComponent, HomeComponent],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
