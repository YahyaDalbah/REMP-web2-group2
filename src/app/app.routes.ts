import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { PropertieComponent } from './pages/propertie/propertie.component';
import { CrudPropertiesComponent } from './pages/crud-properties/crud-properties.component';
import { AddPropertyComponent } from './pages/crud-properties/add-property/add-property.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProfileComponent } from './pages/profile/profile.component';
export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
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
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'profile/:userId/properties',
    component: CrudPropertiesComponent,
  },
  {
    path: 'profile/:userId/properties/add',
    component: AddPropertyComponent,
  },
  {
    path: 'profile/:userId/properties/edit/:id',
    component: AddPropertyComponent,
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./admin-dashboard/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'dashboard/users',
    loadComponent: () =>
      import(
        './admin-dashboard/users-management/users-management.component'
      ).then((m) => m.UsersManagementComponent),
  },
  {
    path: 'dashboard/properties',
    loadComponent: () =>
      import('./admin-dashboard/properties/properties.component').then(
        (m) => m.AdminPropertiesComponent
      ),
  },
  {
    path: 'dashboard/transactions',
    loadComponent: () =>
      import('./admin-dashboard/transactions/transactions.component').then(
        (m) => m.TransactionsComponent
      ),
  },
  {
    path: 'dashboard/inappropriate-listings',
    loadComponent: () =>
      import(
        './admin-dashboard/inappropriate-listings/inappropriate-listings.component'
      ).then((m) => m.InappropriateListingsComponent),
  },
  {
    path: 'dashboard/reports',
    loadComponent: () =>
      import('./admin-dashboard/reports/reports.component').then(
        (m) => m.ReportsComponent
      ),
  },
];
