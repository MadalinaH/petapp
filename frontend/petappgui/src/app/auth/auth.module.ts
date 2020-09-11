import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
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
