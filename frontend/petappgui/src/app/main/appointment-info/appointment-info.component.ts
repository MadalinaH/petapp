import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from '../../api.service';
import { Appointment } from '../../models/appointment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-info',
  templateUrl: './appointment-info.component.html',
  styleUrls: ['./appointment-info.component.css']
})
export class AppointmentInfoComponent implements OnInit {

  appointment: Appointment = {} as Appointment;

  selectedId: number;

  constructor(
    private apiService: ApiService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
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

  deleteAppointment(): void {
    this.apiService.deleteAppointment(this.selectedId).subscribe(
      result => {
        this.router.navigate(['/main/appointments']);
      },
      error => {
        console.log(error);
      }
    )
  }

  editAppointment(): void {
    console.log('');
  }

  goBack(): void {
    this.location.back();
  }

}
