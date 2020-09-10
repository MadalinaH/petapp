import { AbstractControl, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

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
  ) {}
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
    // general validator for the entire form
    {validators: this.passwordMatch});
  }
  // custom validator, takes as argument the form group because it is applied to the entire form, not just a single field
  passwordMatch(control: FormGroup): {passwordsDontMatch: boolean} {
    if(control.get('password').value !== control.get('confirm_password').value) {
      return {passwordsDontMatch: true};
    }
    else {
      // if the values match, we return null to remove the error object if already set
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
