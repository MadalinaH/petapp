import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pet } from './models/pet';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  baseUrl = 'http://127.0.0.1:8000/api/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Token 3ea9fe47b035fe3e987dbf113e94e8e21c75cf07'
  });

  constructor(
    private httpClient: HttpClient
  ) { }

  getPets() {
    return this.httpClient.get<Pet[]>(this.baseUrl + 'pets/', {headers: this.headers});
  }

  getPet(id) {
    return this.httpClient.get<Pet>(this.baseUrl + 'pets/' + id + '/', {headers: this.headers});
  }

}
