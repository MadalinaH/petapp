import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CookieService } from 'ngx-cookie-service';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [NavbarComponent, NotFoundComponent],
  imports: [CommonModule],
  providers: [CookieService],
  exports: [
    NavbarComponent,
    NotFoundComponent
  ]
})
export class SharedModule {}
