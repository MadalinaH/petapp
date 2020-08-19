import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

interface TokenObject {
  token: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private apiSevice: ApiService,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    })
  }

  onLogin(): void {
    this.apiSevice.loginUser(this.loginForm.value).subscribe(
      (result: TokenObject) => {
        console.log(result);
        this.cookieService.set('petapp-token', result.token, null, '/');
      },
      error => console.log(error)
    )
  }
}
