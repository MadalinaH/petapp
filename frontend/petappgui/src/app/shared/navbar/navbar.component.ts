import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  constructor(
    private apiService: ApiService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.apiService.isLoggedIn;
  }

  onLogout(): void {
    // check again if we need to delete the cookie here and not in the service
    this.cookieService.delete('petapp-token', '/');
    this.apiService.logoutUser();
  }

}
