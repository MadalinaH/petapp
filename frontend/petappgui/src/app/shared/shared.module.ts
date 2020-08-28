import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CookieService } from 'ngx-cookie-service';
import { NotFoundComponent } from './not-found/not-found.component';
import { Routes, RouterModule } from '@angular/router';
// import { Observable } from 'rxjs';


@NgModule({
  declarations: [NavbarComponent, NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule,
    // Observable
  ],
  providers: [CookieService],
  exports: [
    NavbarComponent,
    NotFoundComponent,
    RouterModule
  ]
})
export class SharedModule {}
