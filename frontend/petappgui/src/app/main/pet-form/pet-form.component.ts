import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent implements OnInit {

  petForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.petForm = new FormGroup({
      'petName': new FormControl(null, Validators.required),
      'petType': new FormControl(null, Validators.required),
      'petSex': new FormControl(null, Validators.required),
      'birthDate': new FormControl(null, Validators.required),
      'petBreed': new FormControl(null, Validators.required),
      'microchipNo': new FormControl(null, Validators.required),
      'passportNo': new FormControl(null, Validators.required)
    })
  }

  onSubmit(): void {
    console.log('');
  }

}
