import { ActivatedRoute } from '@angular/router';
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
  selectedId: number;
  pets: Pet[];
  vets: Vet[];
  constructor(
    private route: ActivatedRoute,
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
    this.route.queryParams.subscribe(params => {
      this.selectedId = params['selectedId'];
      if(this.selectedId == 0) {
        this.appointmentForm = new FormGroup({
          'pet_id': new FormControl(null, Validators.required),
          'vet_id': new FormControl(null, Validators.required),
          'date': new FormControl(null, Validators.required),
          'time': new FormControl(null, Validators.required),
          'notes': new FormControl(null)
        });
      }
      else {
        this.apiService.getAppointment(this.selectedId).subscribe(
          appointment =>  {
            this.appointmentForm = new FormGroup({
              'pet_id': new FormControl(appointment.pet_id, Validators.required),
              'vet_id': new FormControl(appointment.vet_id, Validators.required),
              'date': new FormControl(appointment.date, Validators.required),
              'time': new FormControl(appointment.time, Validators.required),
              'notes': new FormControl(appointment.notes)
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
      this.apiService.addAppointment(this.appointmentForm.value).subscribe(
        result => {
          this.router.navigate(['/main/appointments']);
        },
        error => {
          console.log(error);
        }
      );
    }
    else {
      this.apiService.editAppointment(this.selectedId, this.appointmentForm.value).subscribe(
        result => {
          this.router.navigate(['/main/appointment-info/'], { queryParams: { selectedId: this.selectedId }});
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
