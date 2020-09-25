import { ApiService } from '../../api.service';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,
         FormControl,
         FormArray,
         Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenObject } from '../../models/token-object';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginError$: Observable<boolean>;
  loginForm: FormGroup;
  constructor(
    private apiService: ApiService,
    private cookieService: CookieService,
    private router: Router
  ) {}
  // On init, we check for the token and if it exists, we skip the login and redirect to main
  ngOnInit(): void {

    this.apiService.setLoginError();
    this.loginError$ = this.apiService.loginError;
    
    const petappToken = this.cookieService.get('petapp-token');
    if(petappToken) {
      this.router.navigate(['/main']);
    }
    this.initForm();
  }
  initForm(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    })
  }
  onLogin(): void {
    this.apiService.loginUser(this.loginForm.value);
  }
}