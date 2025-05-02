import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent],
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
