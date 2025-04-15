import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  menuItems = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard' },
    { path: '/users', title: 'Users Management', icon: 'people' },
    { path: '/properties', title: 'Properties', icon: 'home' },
    { path: '/transactions', title: 'Transactions', icon: 'attach_money' },
    { path: '/reports', title: 'Reports', icon: 'assessment' },
    { path: '/inappropriate-listings', title: 'Inappropriate Listings', icon: 'report_problem' },
  ];
}
