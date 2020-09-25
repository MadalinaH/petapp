import { AbstractControl,
         FormGroup,
         FormControl,
         FormArray,
         Validators } from '@angular/forms';
import { ApiService } from '../../api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  formValid: boolean = false;
  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.initForm();
    this.onChanges();
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
    // General validator for the entire form
    {validators: this.passwordMatch});
  }
  // We check for errors and update the form status as the form is filled-in
  onChanges(): void {
    this.registerForm.valueChanges.subscribe(result => {
     this.changeFormStatus();
    })
  }
  // TO DO: refactor - loop through form fields instead
  changeFormStatus() {
    if(!this.registerForm.errors
      && !this.registerForm.get('first_name').errors
      && !this.registerForm.get('last_name').errors
      && !this.registerForm.get('username').errors
      && !this.registerForm.get('email').errors
      && !this.registerForm.get('password').errors
      && !this.registerForm.get('confirm_password').errors) {
        this.formValid = true;
      }
      else {
        this.formValid = false;
      }
  }
  // Custom validator which takes as argument the form group because it is applied to the entire form, not just to a single field
  passwordMatch(control: FormGroup): {passwordsDontMatch: boolean} {
    if(control.get('password').value !== control.get('confirm_password').value) {
      return {passwordsDontMatch: true};
    }
    else {
      // If the values match, we return null to remove the error object if it is already set
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
    this.apiService.registerUser(registerData).subscribe(
      user => this.router.navigate(['/auth/login']),
      error => console.log(error)
    )
  }
}