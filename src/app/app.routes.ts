import { Routes } from '@angular/router';
import { Routing } from './enums/page-routing';
import { Library } from './pages/library/library';
import { Favorites } from './pages/favorites/favorites';
import { Photos } from './pages/photos/photos';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: Routing.LIBRARY
  },
  {
    path: Routing.LIBRARY,
    component: Library
  },
  {
    path: Routing.FAVORITES,
    component: Favorites
  },
  {
    path: Routing.PHOTO_DETAILS,
    component: Photos
  },
];
