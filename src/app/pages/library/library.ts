import { Component, inject, OnInit, signal } from '@angular/core';
import { Header } from '../../components/header/header';
import { Tab } from '../../enums/tabs';
import { SpinnerCustomComponent } from "../../components/spinner-custom/spinner-custom.component";
import { DataService } from '../../services/data.service';
import { HelperService } from '../../services/helper.service';
import { CommonModule } from '@angular/common';
import { ImageRetrieval } from '../../interfaces/image-retrieval';
import { ImagesSection } from '../../components/images-section/images-section';

@Component({
  selector: 'app-library',
  imports: [Header, SpinnerCustomComponent, CommonModule, ImagesSection],
  templateUrl: './library.html',
  styleUrl: './library.scss',
})
export class Library implements OnInit {

  // Local Fields
  readonly headerTab: typeof Tab = Tab;
  showLoading = signal(true);
  dataService = inject(DataService);
  imagesList = signal<ImageRetrieval[]>([]);
  helper = inject(HelperService);

  async ngOnInit() {

    // Retrieve the list of images
    this.retrieveImages(10);

    // Listen to wheel and scroll event for infinite scroll
    window.addEventListener('wheel', (event: WheelEvent) => {
      this.loadMoreImages(event);
    });
  }

  /**
   * This method retrieves images
   */
  async retrieveImages(totalImages: number): Promise<void> {

    // Show loading
    this.showLoading.set(true);

    for (let i = 0; i < totalImages; i++){

      await this.dataService.retrieveImage().then((imageRetrieved: ImageRetrieval) => {
        this.imagesList.update((currentImagesList) => [...currentImagesList, imageRetrieved]);
      }).catch(() => {
        this.showLoading.set(false);
      });

    }

    // Close the spinner
    this.showLoading.set(false);
    this.helper.consoleHandler('Retrieved Images List: ', this.imagesList());
  }

  /**
   * This method retrieves more images and appends them to the existing list
   */
  loadMoreImages(event: any) :void {

    const deltaY = event.deltaY;

    // If reached at end of scroll, retrieve more images
    if (this.helper.checkUndefinedNull(deltaY) && !isNaN(Number(deltaY))) {
      if (Number(deltaY) > 0 && !this.showLoading()) {
        this.retrieveImages(10);
      }
    }

  }

  /**
   * This method sets an image as favorite
   * @param image
   */
  setFavorite(image: ImageRetrieval): void {

    // Retrieve existing favorites
    const existingFavorite = localStorage.getItem('favoriteImages');

    let favoriteImages: ImageRetrieval[] = [];
    if (this.helper.checkStringCases(existingFavorite)) {
      favoriteImages = JSON.parse(existingFavorite as string) as ImageRetrieval[];
    }

    // Check if image already exists in favorites
    const imageExists = favoriteImages.find((favImage: ImageRetrieval) => favImage.hmac === image.hmac);
    if (this.helper.checkUndefinedNull(imageExists)) {
      return;
    }

    // Push to the array of favorite images
    favoriteImages.push(image);

    // Store in local storage
    localStorage.setItem('favoriteImages', JSON.stringify(favoriteImages));
  }
}
