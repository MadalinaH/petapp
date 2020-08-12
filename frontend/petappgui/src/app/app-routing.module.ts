import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './auth/landing-page/landing-page.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './main/home/home.component';
import { PetListComponent } from './main/pet-list/pet-list.component';
import { PetInfoComponent } from './main/pet-info/pet-info.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'auth',
    children: [
      { path: '', component: LandingPageComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]},
  { path: 'main',
    children: [
      { path: '', component: HomeComponent },
      { path: 'pets', component: PetListComponent },
      { path: 'pet/:id', component: PetInfoComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}