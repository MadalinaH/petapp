import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://127.0.0.1:8000/api/pets/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Token 3ea9fe47b035fe3e987dbf113e94e8e21c75cf07'
  });

  constructor(
    private httpClient: HttpClient
  ) { }

  getPets() {
    return this.httpClient.get(this.baseUrl, {headers: this.headers});
  }

}
