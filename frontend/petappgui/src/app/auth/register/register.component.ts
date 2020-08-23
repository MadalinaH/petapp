import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { AbstractControl, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private apiSevice: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.registerForm = new FormGroup({
      'first_name': new FormControl(null, Validators.required),
      'last_name': new FormControl(null, Validators.required),
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ]),

      'password': new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      'confirm_password': new FormControl(null, Validators.required)
    },
    {validators: this.passwordMatch});
  }

  passwordMatch(control: FormGroup): {passwordsDontMatch: boolean} {
    if(control.get('password').value !== control.get('confirm_password').value) {
      return {passwordsDontMatch: true};
    }
    else {
      return null;
    }
  }

  onRegister(): void {
    const registerData = {};
    registerData['first_name'] = this.registerForm.value['first_name'];
    registerData['last_name'] = this.registerForm.value['last_name'];
    registerData['username'] = this.registerForm.value['username'];
    registerData['email'] = this.registerForm.value['email'];
    registerData['password'] = this.registerForm.value['password'];
    this.apiSevice.registerUser(registerData).subscribe(
      user => this.router.navigate(['/auth/login']),
      error => console.log(error)
    )
  }

}
