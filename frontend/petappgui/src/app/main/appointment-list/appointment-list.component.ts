import { ApiService } from '../../api.service';
import { Appointment } from '../../models/appointment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})

export class AppointmentListComponent implements OnInit {
  appointments: Appointment[];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.getAppointments();
  }
  getAppointments() {
    this.apiService.getAppointments().subscribe(
      appointments =>  {
        this.appointments = appointments;
      },
      error => {
        console.log(error);
      }
    )
  }
}