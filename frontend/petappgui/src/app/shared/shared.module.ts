import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";

@NgModule({
  declarations: [NavbarComponent, NotFoundComponent, ConfirmDialogComponent],
  // entryComponents: [ConfirmDialogComponent],
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
