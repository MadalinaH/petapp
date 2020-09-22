import { ApiService } from '../../api.service';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  // $ Means the property is an observable and we watch it for value changes
  isLoggedIn$: Observable<boolean>;
  constructor(
    private apiService: ApiService,
    private cookieService: CookieService
  ) {}
  ngOnInit(): void {
    this.isLoggedIn$ = this.apiService.isLoggedIn;
  }
  onLogout(): void {
    // To check again if we need to delete the cookie here and not in the service
    this.cookieService.delete('petapp-token', '/');
    this.apiService.logoutUser();
  }
}