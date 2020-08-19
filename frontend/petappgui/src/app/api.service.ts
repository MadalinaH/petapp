import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from './models/appointment';
import { Pet } from './models/pet';
import { Vet } from './models/vet';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  baseUrl = 'http://127.0.0.1:8000/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Token 3ea9fe47b035fe3e987dbf113e94e8e21c75cf07'
  });

  constructor(private httpClient: HttpClient) { }

  getPets() {
    const currentUrl = this.baseUrl + 'api/pets/';
    return this.httpClient.get<Pet[]>(currentUrl, {headers: this.headers});
  }

  getPet(id) {
    const currentUrl = this.baseUrl + 'api/pets/' + id;
    return this.httpClient.get<Pet>(currentUrl, {headers: this.headers});
  }

  getAppointments() {
    const currentUrl = this.baseUrl + 'api/appointments/';
    return this.httpClient.get<Appointment[]>(currentUrl, {headers: this.headers});
  }

  getAppointment(id) {
    const currentUrl = this.baseUrl + 'api/appointments/' + id;
    return this.httpClient.get<Appointment>(currentUrl, {headers: this.headers});
  }

  getVets() {
    const currentUrl = this.baseUrl + 'api/vet_offices/';
    return this.httpClient.get<Vet[]>(currentUrl, {headers: this.headers});
  }

  loginUser(authData) {
    const body = JSON.stringify(authData);
    const currentUrl = this.baseUrl + 'auth/';
    return this.httpClient.post(currentUrl, body, {headers: this.headers});

  }

}
