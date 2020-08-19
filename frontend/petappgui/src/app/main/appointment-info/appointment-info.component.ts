import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { Appointment } from '../../models/appointment';
import { Location } from '@angular/common';

@Component({
  selector: 'app-appointment-info',
  templateUrl: './appointment-info.component.html',
  styleUrls: ['./appointment-info.component.css']
})
export class AppointmentInfoComponent implements OnInit {

  appointment: Appointment = {} as Appointment;

  selectedId: number;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getSelectedId();
    this.getAppointment();
  }

  getSelectedId(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedId = params['selectedId'];
    });
  }

  getAppointment(): void {
    this.apiService.getAppointment(this.selectedId).subscribe(
      appointment =>  {
        this.appointment = appointment;
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
