import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule],
  providers: [CookieService],
  exports: [NavbarComponent]
})
export class SharedModule {}
