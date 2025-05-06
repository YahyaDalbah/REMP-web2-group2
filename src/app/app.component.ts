import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { SidebarComponent } from "./admin-dashboard/layout/sidebar/sidebar.component";
import { HeaderComponent } from "./admin-dashboard/layout/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, SidebarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  
  constructor(private router: Router) {}

  isLoginRoute(): boolean {
    return this.router.url === '/login' || this.router.url === '/signup';
  }

  isAdminDashboardRoute(): boolean {
    return this.router.url.includes('/dashboard');
  }

  title = 'remp-group2-web2';
}
