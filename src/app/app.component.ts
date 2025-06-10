import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavComponent } from './components/nav/nav.component';
import { SidebarComponent } from "./admin-dashboard/layout/sidebar/sidebar.component";
import { HeaderComponent } from "./admin-dashboard/layout/header/header.component";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, SidebarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  currentUrl: string = '';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentUrl = event.url;
      });
  }

  isLoginRoute(): boolean {
    return this.currentUrl === '/login' || this.currentUrl === '/signup';
  }

  isAdminDashboardRoute(): boolean {
    return this.currentUrl.includes('/dashboard');
  }
}
