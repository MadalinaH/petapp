import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { Appointment } from '../../models/appointment';

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
    private apiService: ApiService
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

  getAppointment() {
    this.apiService.getAppointment(this.selectedId).subscribe(
      appointment =>  {
        this.appointment = appointment;
      },
      error => {
        console.log(error);
      }
    )
  }

}
