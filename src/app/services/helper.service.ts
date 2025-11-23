import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../environments/environment';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class HelperService {

  sanitizer = inject(DomSanitizer);
  translate = inject(TranslateService);

  /**
   * This method is general console log handler
   * @param data
   * @param data2
   */
  public consoleHandler(data: any, data2?: any){
    if (environment.tracelog){
      console.log(data);
      if (this.checkUndefinedNull(data2)){
        console.log(data2);
      }
    }
  }

  /**
   * This method checks for undefined or null
   * @param givenParam
   * @returns boolean
   */
  checkUndefinedNull(givenParam: any) : boolean {
    if (givenParam === undefined || givenParam === null){
      return false;
    }

    return true;
  }

  /**
   * This method checks for undefined or null or emty string
   * @param givenParam
   * @returns boolean
   */
  checkStringCases(givenParam: any) : boolean {
    if (givenParam === undefined || givenParam === null || givenParam === ''){
      return false;
    }

    return true;
  }
}
