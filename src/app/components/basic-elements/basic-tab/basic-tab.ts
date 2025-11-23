import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-basic-tab',
  imports: [CommonModule],
  templateUrl: './basic-tab.html',
  styleUrl: './basic-tab.scss',
})
export class BasicTab {

  // Inputs, Outputs
  @Input() titleBtn: string = '';
  @Input() disabled: boolean = false;
  @Input() showAsSelected: boolean = false;
  @Input() withIconSrc: string = '';
  @Output() onClick: EventEmitter<boolean> = new EventEmitter();

  /**
   * This method emits an action when the tab is clicked.
   */
  emitAction() {
    this.onClick.emit(true);
  }
}
