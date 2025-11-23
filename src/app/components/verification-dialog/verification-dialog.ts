import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogInput } from '../../interfaces/dialog-input';
import { TranslatePipe } from '@ngx-translate/core';
import { BtnAction } from "../basic-elements/btn-action/btn-action";

@Component({
  selector: 'app-verification-dialog',
  imports: [TranslatePipe, BtnAction],
  templateUrl: './verification-dialog.html',
  styleUrl: './verification-dialog.scss',
})
export class VerificationDialog {

  // Local fields
  dialogRef = inject(MatDialogRef);
  inputData: DialogInput = inject(MAT_DIALOG_DATA);

  /**
   * This method closes the dialog
   */
  closeDialog() {
    this.dialogRef.close(false);
  }

  /**
   * This method confirms the action
   */
  confirmAction() {
    this.dialogRef.close(true);
  }
}
