import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { PropertieComponent } from './pages/propertie/propertie.component';
import { CrudPropertiesComponent } from './pages/crud-properties/crud-properties.component';
import { AddPropertyComponent } from './pages/crud-properties/add-property/add-property.component';

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
  {
    path: "profile/:userId/properties",
    component: CrudPropertiesComponent
  },
  {
    path: "profile/:userId/properties/add",
    component: AddPropertyComponent
  },
  {
    path: 'profile/:userId/properties/edit/:id',
    component: AddPropertyComponent
  }
];
