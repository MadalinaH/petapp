import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [LandingPageComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
