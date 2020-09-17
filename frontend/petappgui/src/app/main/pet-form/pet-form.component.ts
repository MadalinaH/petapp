import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup,
         FormControl,
         FormArray,
         Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})

export class PetFormComponent implements OnInit {
  petForm: FormGroup;
  selectedId: number;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private apiService: ApiService,
    private router:Router
  ) {}
  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedId = params['selectedId'];
      if(this.selectedId == 0) {
        this.petForm = new FormGroup({
          'name': new FormControl(null, Validators.required),
          'type': new FormControl(null, Validators.required),
          'sex': new FormControl(null, Validators.required),
          'date_of_birth': new FormControl(null, Validators.required),
          'breed': new FormControl(null, Validators.required),
          'microchip_no': new FormControl(null, Validators.required),
          'passport_no': new FormControl(null, Validators.required)
        })
      }
      else {
        this.apiService.getPet(this.selectedId).subscribe(
          pet =>  {
            this.petForm = new FormGroup({
              'name': new FormControl(pet.name, Validators.required),
              'type': new FormControl(pet.type, Validators.required),
              'sex': new FormControl(pet.sex, Validators.required),
              'date_of_birth': new FormControl(pet.date_of_birth, Validators.required),
              'breed': new FormControl(pet.breed, Validators.required),
              'microchip_no': new FormControl(pet.microchip_no, Validators.required),
              'passport_no': new FormControl(pet.passport_no, Validators.required)
          });
        },
        error => {
          console.log(error);
        });
      }
    });
  }
  onSubmit(): void {
    if(this.selectedId == 0) {
      this.apiService.addPet(this.petForm.value).subscribe(
        result => {
          this.router.navigate(['/main/pets']);
        },
        error => {
          console.log(error);
        }
      );
    }
    else {
      this.apiService.editPet(this.selectedId, this.petForm.value).subscribe(
        result => {
          this.router.navigate(['/main/pet-info/'], { queryParams: { selectedId: this.selectedId }});
        },
        error => {
          console.log(error);
        }
      );
    }
  }
  goBack(): void {
    this.location.back();
  }
}
