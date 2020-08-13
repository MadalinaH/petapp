import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { Pet } from '../../models/pet';

@Component({
  selector: 'app-pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.css']
})
export class PetInfoComponent implements OnInit {

pet: Pet = {} as Pet;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getPet();
  }

  getPet(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getPet(id).subscribe(
      pet =>  {
        this.pet = pet;
      },
      error => {
        console.log(error);
      }
    )
  }

}
