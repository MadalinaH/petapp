import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ConfirmDialogService {
  constructor(private dialog: MatDialog) {}
  dialogRef: MatDialogRef<ConfirmDialogComponent>;
  public open(options) {
    this.dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: options.title,
        message: options.message,
        cancelText: options.cancelText,
        confirmText: options.confirmText
      }
    });
  }
  // Returns an observable value that we can listen to for the user's action
  public confirmed(): Observable<any> {
    return this.dialogRef.afterClosed().pipe(take(1), map(result => {
      return result;
    }));
  }
}