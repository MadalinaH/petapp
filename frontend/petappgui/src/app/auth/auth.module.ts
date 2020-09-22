import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [];

@NgModule({
  declarations: [LoginComponent, RegisterComponent, LandingPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  exports: [RouterModule],
  providers: [CookieService]
})

export class AuthModule {}