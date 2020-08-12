import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../api.service';
@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pets: any = [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getPets().subscribe(
      data =>  {
        this.pets = data;
      },
      error => {
        console.log(error);
      }
    )
  }

}
