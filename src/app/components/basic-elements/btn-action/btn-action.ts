import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn-action',
  imports: [],
  templateUrl: './btn-action.html',
  styleUrl: './btn-action.scss',
})
export class BtnAction {

  // Inputs, Outputs
  @Input() titleBtn: string = '';
  @Input() disabled: boolean = false;
  @Input() backgroundColor: string = '#F0F8FF';
  @Input() textColor: string = '#212121';
  @Input() withIconSrc: string = '';
  @Output() onClick: EventEmitter<boolean> = new EventEmitter();

  /**
   * This method emits an action when the button is clicked.
   */
  emitAction() {
    this.onClick.emit(true);
  }
}
