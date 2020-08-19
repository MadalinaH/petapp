import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { Pet } from '../../models/pet';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.css']
})
export class PetInfoComponent implements OnInit {

  pet: Pet = {} as Pet;
  
  selectedId: number;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getSelectedId();
    this.getPet();
  }

  getSelectedId(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedId = params['selectedId'];
    });
  }

  getPet(): void {
    this.apiService.getPet(this.selectedId).subscribe(
      pet =>  {
        this.pet = pet;
      },
      error => {
        console.log(error);
      }
    )
  }

  goBack(): void {
    this.location.back();
  }

}
