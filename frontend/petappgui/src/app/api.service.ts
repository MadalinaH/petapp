import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Appointment } from './models/appointment';
import { Pet } from './models/pet';
import { Vet } from './models/vet';
import { TokenObject } from './models/token-object';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  // the Behavior Subject class ensures all subscribers get the same value of the observable at any given time
  // on login and logout, we change the value of this boolean variable
  private loggedIn = new BehaviorSubject<boolean>(false);

  // returns value of loggedIn as an observable
  get isLoggedIn() {
     return this.loggedIn.asObservable();
  }

  baseUrl = 'http://127.0.0.1:8000/';
  token = this.cookieService.get('petapp-token');
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(
    private cookieService: CookieService,
    private httpClient: HttpClient,
    private router: Router
  ) { }

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
    this.httpClient.post(currentUrl, body, {headers: this.headers}).subscribe(
      (result: TokenObject) => {
        this.loggedIn.next(true);
        this.router.navigate(['/main']);
        this.cookieService.set('petapp-token', result.token, null, '/');
      },
      error => console.log(error)
    );
  }

  logoutUser(): void {
    this.loggedIn.next(false);
    // this.cookieService.delete('petapp-token', '/');
    this.router.navigate(['/auth']);
  }

  registerUser(registerData) {
    const body = JSON.stringify(registerData);
    const currentUrl = this.baseUrl + 'api/users/';
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
