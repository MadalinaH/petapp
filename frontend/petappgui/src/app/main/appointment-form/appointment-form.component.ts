import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models/pet';
import { Vet } from '../../models/vet';
import { ApiService } from '../../api.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {

  appointmentForm: FormGroup;

  pets: Pet[];

  vets: Vet[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getPets();
    this.getVets();
    this.initForm();
  }

  getVets(): void {
    this.apiService.getVets().subscribe(
      vets =>  {
        this.vets = vets;
      },
      error => {
        console.log(error);
      }
    )
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

  initForm(): void {
    this.appointmentForm = new FormGroup({
      'pet': new FormControl(null, Validators.required),
      'vet': new FormControl(null, Validators.required),
      'date': new FormControl(null, Validators.required),
      'time': new FormControl(null, Validators.required),
      'notes': new FormControl(null),
    })
  }

  onSubmit(): void {
    console.log('Bleh');
  }

}
