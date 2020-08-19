import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Pet } from '../../models/pet';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pets: Pet[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getPets();
  }

  getPets(): void {
    this.apiService.getPets().subscribe(
      pets =>  {
        this.pets = pets;
      },
      error => {
        console.log(error);
      }
    )
  }

}
