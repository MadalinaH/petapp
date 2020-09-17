import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from '../../api.service';
import { Pet } from '../../models/pet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.css']
})

export class PetInfoComponent implements OnInit {
  pet: Pet = {} as Pet;
  selectedId: number;
  constructor(
    private apiService: ApiService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) {}
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
  deletePet(): void {
    this.apiService.deletePet(this.selectedId).subscribe(
      result => {
        this.router.navigate(['/main/pets']);
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
