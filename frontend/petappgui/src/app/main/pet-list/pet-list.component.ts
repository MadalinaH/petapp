import { Component, OnInit } from '@angular/core';
import { I18nPluralPipe } from '@angular/common';
import { ApiService } from '../../api.service';
import { Pet } from '../../models/pet';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})

export class PetListComponent implements OnInit {
  pets: Pet[];
  constructor(private apiService: ApiService) {}
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
  petAge(birthDate) {
    return (new Date()).getFullYear() - (new Date(birthDate)).getFullYear();
  }
  itemPluralMapping = {
    'year': {
      '=0' : 'under 1 year',
      '=1' : '1 year',
      'other' : '# years'
    }
  }
}
