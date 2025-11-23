import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Header } from "../../components/header/header";
import { Tab } from '../../enums/tabs';
import { HelperService } from '../../services/helper.service';
import { InfoBox } from "../../components/basic-elements/info-box/info-box";
import { TranslatePipe } from '@ngx-translate/core';
import { ImageRetrieval } from '../../interfaces/image-retrieval';
import { ImagesSection } from "../../components/images-section/images-section";
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  imports: [CommonModule, Header, InfoBox, TranslatePipe, ImagesSection],
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss',
})
export class Favorites implements OnInit {

  // Local fields
  readonly headerTab: typeof Tab = Tab;
  private router = inject(Router);
  public helper = inject(HelperService);
  favoriteImages = signal<ImageRetrieval[]>([]);

  ngOnInit() {

    // Retrieve existing favorites
    const existingFavorite = localStorage.getItem('favoriteImages');

    if (this.helper.checkStringCases(existingFavorite)) {
      this.favoriteImages.set(JSON.parse(existingFavorite as string) as ImageRetrieval[]);
    }

    this.helper.consoleHandler('Existing Favorite Images: ', this.favoriteImages());

  }

  /**
   * This method previews the selected image into a separate page
   * @param imageToPreview
   */
  previewImage(imageToPreview: ImageRetrieval): void {
    this.router.navigate(['/photos', imageToPreview.hmac]);
  }
}
