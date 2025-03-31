import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { PropertieComponent } from './pages/propertie/propertie.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'properties',
    component: PropertiesComponent,
  },
  {
    path: 'properties/:id',
    component: PropertieComponent,
  },
];
