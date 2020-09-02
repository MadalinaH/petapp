import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { Pet } from '../../models/pet';
import { Vet } from '../../models/vet';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {

  appointmentForm: FormGroup;

  pets: Pet[];

  vets: Vet[];

  constructor(
    private apiService: ApiService,
    private router:Router
  ) {}

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
      'pet_id': new FormControl(null, Validators.required),
      'vet_id': new FormControl(null, Validators.required),
      'date': new FormControl(null, Validators.required),
      'time': new FormControl(null, Validators.required),
      'notes': new FormControl(null),
    })
  }

  onSubmit(): void {
    console.log('Saving appointment!')
    this.apiService.addAppointment(this.appointmentForm.value).subscribe(
      result => {
        this.router.navigate(['/main/appointments']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
