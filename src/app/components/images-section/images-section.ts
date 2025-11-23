import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ImageRetrieval } from '../../interfaces/image-retrieval';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-images-section',
  imports: [CommonModule],
  templateUrl: './images-section.html',
  styleUrl: './images-section.scss',
})
export class ImagesSection {

  // INPUTS, OUTPUTS
  @Input() imagesList: ImageRetrieval[] = [];
  @Output() imageAction: EventEmitter<ImageRetrieval> = new EventEmitter();

  // Local Fields
  helper = inject(HelperService);

  /**
   * This method emits image action when an image is clicked
   * @param clickedImage
   */
  emitImageAction(clickedImage: ImageRetrieval){
    this.imageAction.emit(clickedImage);
  }
}
