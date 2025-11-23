import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { BasicTab } from "../basic-elements/basic-tab/basic-tab";
import { HeaderTab } from '../../interfaces/header-tab';
import { Routing } from '../../enums/page-routing';
import { Router } from '@angular/router';
import { HelperService } from '../../services/helper.service';
import { TranslatePipe } from '@ngx-translate/core';
import { Tab } from '../../enums/tabs';

@Component({
  selector: 'app-header',
  imports: [CommonModule, BasicTab, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {

  // INPUTS
  @Input() selectedTab: Tab = Tab.LIBRARY;

  // Local fields
  private router = inject(Router);
  public helper = inject(HelperService);
  headerTabs: HeaderTab[] = [];
  localSelectedTab: HeaderTab | undefined;

  ngOnInit() {

    // Generate the tabs
    this.generateNavTabs();

    // Set current active tab - Library initially
    this.localSelectedTab = {
      title: 'header.images',
      route: Routing.LIBRARY,
      code: this.selectedTab,
      iconSrc: ''
    };
  }

  /**
   * This method generates the navigation tabs for the header
   */
  generateNavTabs() {
    this.headerTabs = [
      {
        title: 'header.images',
        route: Routing.LIBRARY,
        code: Tab.LIBRARY,
        iconSrc: '/images/tabs/gallery/photo-gallery.svg'
      },
      {
        title: 'header.favorites',
        route: Routing.FAVORITES,
        code: Tab.FAVORITES,
        iconSrc: '/images/tabs/favorites/favorite-image.svg'
      }
    ];
  }

  /**
   * This method navigates to the given route
   * @param route
   */
  navTo(route: string) {
    this.router.navigate(['/'+ route]);
  }
}
