import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CookieService } from 'ngx-cookie-service';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

@NgModule({
  declarations: [NavbarComponent, NotFoundComponentComponent],
  imports: [CommonModule],
  providers: [CookieService],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule {}
