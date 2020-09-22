import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { CookieService } from 'ngx-cookie-service';
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, NotFoundComponent, ConfirmDialogComponent],
  exports: [
    ConfirmDialogComponent,
    NavbarComponent,
    NotFoundComponent,
    RouterModule
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    RouterModule
  ],
  providers: [CookieService]
})

export class SharedModule {}