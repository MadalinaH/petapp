import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pet } from './models/pet';
import { Appointment } from './models/appointment';
import { Vet } from './models/vet';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  baseUrl = 'http://127.0.0.1:8000/api/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Token 3ea9fe47b035fe3e987dbf113e94e8e21c75cf07'
  });

  constructor(private httpClient: HttpClient) { }

  getPets() {
    const currentUrl = this.baseUrl + 'pets';
    return this.httpClient.get<Pet[]>(currentUrl, {headers: this.headers});
  }

  getPet(id) {
    const currentUrl = this.baseUrl + 'pets/' + id;
    return this.httpClient.get<Pet>(currentUrl, {headers: this.headers});
  }

  getAppointments() {
    const currentUrl = this.baseUrl + 'appointments';
    return this.httpClient.get<Appointment[]>(currentUrl, {headers: this.headers});
  }

  getAppointment(id) {
    const currentUrl = this.baseUrl + 'appointments/' + id;
    return this.httpClient.get<Appointment>(currentUrl, {headers: this.headers});
  }

  getVets() {
    const currentUrl = this.baseUrl + 'vet_offices';
    return this.httpClient.get<Vet[]>(currentUrl, {headers: this.headers});
  }

}
