import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { Component, OnInit } from '@angular/core';
import { ConfirmDialogService } from '../../confirm-dialog.service';
import { Location } from '@angular/common';
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
    private dialogService: ConfirmDialogService,
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
  // TO DO - implement functionality for add appointment button
  addAppointment(): void {
    console.log('');
  }
  deletePet(): void {
    this.dialogService.open({
      title: 'Confirm action',
      message: 'Sure you wanna delete this pet?',
      cancelText: 'No',
      confirmText: "Yes"
    });
    this.dialogService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        this.apiService.deletePet(this.selectedId).subscribe(
          result => {
            this.router.navigate(['/main/pets']);
          },
          error => {
            console.log(error);
          });
      }
    });
  }
  goBack(): void {
    this.location.back();
  }
}