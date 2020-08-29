import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [NavbarComponent, NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [CookieService],
  exports: [
    RouterModule,
    NavbarComponent,
    NotFoundComponent
  ]
})
export class SharedModule {}
