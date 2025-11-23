import { inject, Injectable } from '@angular/core';
import { HelperService } from './helper.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SafeUrl } from '@angular/platform-browser';
import { ImageRetrieval } from '../interfaces/image-retrieval';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  helper = inject(HelperService);
  http = inject(HttpClient);

  retrieveImage(): Promise<ImageRetrieval> {

    // URL
    const url = environment.serverIP;

    // Fetch image
    return new Promise((resolve, reject) => {
      this.http.get(url, {observe: 'response', responseType: 'blob'}).subscribe({
        next: (response: HttpResponse<Blob>) => {

          // Check the response status
          if (response.status && response.status !== 200){
            return reject();
          }

          // Extract the hmac from the response url
          const url = new URL(response.url as string);
          const hmac = new URLSearchParams(url.search).get('hmac');

          // Construct the output for resolving
          const imageRetrieval: ImageRetrieval = {
            hmac: hmac as string,
            originalUrl: response.url as string
          };

          resolve(imageRetrieval);
        }
      });
    });
  }
}
