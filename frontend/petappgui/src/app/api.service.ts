import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Appointment } from './models/appointment';
import { Pet } from './models/pet';
import { Vet } from './models/vet';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  baseUrl = 'http://127.0.0.1:8000/';
  token = this.cookieService.get('petapp-token');
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(
    private cookieService: CookieService,
    private httpClient: HttpClient) { }

  getPets() {
    const currentUrl = this.baseUrl + 'api/pets/';
    return this.httpClient.get<Pet[]>(currentUrl, {headers: this.getAuthHeaders()});
  }

  getPet(id) {
    const currentUrl = this.baseUrl + 'api/pets/' + id;
    return this.httpClient.get<Pet>(currentUrl, {headers: this.getAuthHeaders()});
  }

  getAppointments() {
    const currentUrl = this.baseUrl + 'api/appointments/';
    return this.httpClient.get<Appointment[]>(currentUrl, {headers: this.getAuthHeaders()});
  }

  getAppointment(id) {
    const currentUrl = this.baseUrl + 'api/appointments/' + id;
    return this.httpClient.get<Appointment>(currentUrl, {headers: this.getAuthHeaders()});
  }

  getVets() {
    const currentUrl = this.baseUrl + 'api/vet_offices/';
    return this.httpClient.get<Vet[]>(currentUrl, {headers: this.getAuthHeaders()});
  }

  loginUser(authData) {
    const body = JSON.stringify(authData);
    const currentUrl = this.baseUrl + 'auth/';
    return this.httpClient.post(currentUrl, body, {headers: this.headers});

  }

  getAuthHeaders() {
    const token = this.cookieService.get('petapp-token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    })
  }

}
