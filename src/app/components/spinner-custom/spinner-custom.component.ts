import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

@Component({
  selector: 'app-spinner-custom',
  templateUrl: './spinner-custom.component.html',
  styleUrls: ['./spinner-custom.component.scss'],
  imports: [CommonModule, MatProgressSpinnerModule]
})
export class SpinnerCustomComponent {

  // Diameter of the spinner in pixels
  @Input() diameter: number = 50;
}
