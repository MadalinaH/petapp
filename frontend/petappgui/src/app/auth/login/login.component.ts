import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup,
         FormControl,
         FormArray,
         Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { TokenObject } from '../../models/token-object';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private apiSevice: ApiService,
    private cookieService: CookieService,
    private router: Router
  ) {}
  // On init, we check for the token and if it exists, we skip the login and redirect to main
  ngOnInit(): void {
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
    this.apiSevice.loginUser(this.loginForm.value);
  }
}