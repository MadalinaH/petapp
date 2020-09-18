import { Component, Inject, HostListener, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})

export class ConfirmDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
                  cancelText: string,
                  confirmText: string,
                  message: string,
                  title: string
              },
    private mdDialogRef: MatDialogRef<ConfirmDialogComponent>
  ) {}
  ngOnInit(): void {}
  // calls close function of the material dialog that we imported
  public closeDialog(value) {
    this.mdDialogRef.close(value);
  }
  // Cancel and Confirm functions call closeDialog function with a value
  // corresponding to the action
  public cancel() {
    this.closeDialog(false);
  }
  public confirm() {
    this.closeDialog(true);
  }
  @HostListener("keydown.esc")
    public onEsc() {
      this.closeDialog(false);
    }
}
