import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-box',
  imports: [CommonModule],
  templateUrl: './info-box.html',
  styleUrl: './info-box.scss',
})
export class InfoBox {

  // INPUTS
  @Input() imgSrc: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';

}
