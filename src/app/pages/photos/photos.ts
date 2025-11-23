import { Component, inject, OnInit } from '@angular/core';
import { Header } from "../../components/header/header";
import { CommonModule } from '@angular/common';
import { Tab } from '../../enums/tabs';
import { HelperService } from '../../services/helper.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageRetrieval } from '../../interfaces/image-retrieval';
import { InfoBox } from "../../components/basic-elements/info-box/info-box";
import { TranslatePipe } from '@ngx-translate/core';
import { BtnAction } from "../../components/basic-elements/btn-action/btn-action";
import { VerificationDialog } from '../../components/verification-dialog/verification-dialog';
import { MatDialog } from '@angular/material/dialog';
import { DialogInput } from '../../interfaces/dialog-input';
import { Routing } from '../../enums/page-routing';

@Component({
  selector: 'app-photos',
  imports: [CommonModule, Header, InfoBox, TranslatePipe, BtnAction],
  templateUrl: './photos.html',
  styleUrl: './photos.scss',
})
export class Photos implements OnInit {

  // Local fields
  readonly headerTab: typeof Tab = Tab;
  public helper = inject(HelperService);
  private route = inject(ActivatedRoute);
  private dialog = inject(MatDialog);
  private router = inject(Router);

  favoriteImages: ImageRetrieval[] = [];
  imageRetrieved: ImageRetrieval | undefined;

  ngOnInit(): void {

    // Extract the image HMAC from the route parameters
    this.route.params.subscribe(params => {

      const imageHmac = params['id'];

      // Retrieve the image details based on the HMAC
      if (this.helper.checkStringCases(imageHmac)) {

        // Retrieve existing favorites
        const existingFavorite = localStorage.getItem('favoriteImages');

        if (this.helper.checkStringCases(existingFavorite)) {

          // Find the specific image data from the favorites list
          this.favoriteImages = JSON.parse(existingFavorite as string) as ImageRetrieval[];
          this.imageRetrieved = this.favoriteImages.find((image: ImageRetrieval) => image.hmac === imageHmac);
        }
      }
    });
  }

  /**
   * This method removes the current image from favorites
   */
  removeFromFavorites(){

    const data: DialogInput = {
      title: 'preview_page.remove_favorite',
      subtitle: 'preview_page.verif_delete_message',
      imageVerification: '/images/delete-fav/red/delete.svg'
    }

    // Show verification dialog for delete
    const dialogRef = this.dialog.open(VerificationDialog, {
      width: '700px',
      disableClose: true,
      data
    });

    // Handle dialog close event
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result === true && this.helper.checkUndefinedNull(this.imageRetrieved) && this.imageRetrieved) {

        // Remove from favorites list
        this.favoriteImages = this.favoriteImages.filter((image: ImageRetrieval) => image.hmac !== this.imageRetrieved?.hmac);

        // Update local storage
        localStorage.setItem('favoriteImages', JSON.stringify(this.favoriteImages));

        // Navigate to favorites page
        this.router.navigate(['/' + Routing.FAVORITES]);
      }
    });
  }
}
