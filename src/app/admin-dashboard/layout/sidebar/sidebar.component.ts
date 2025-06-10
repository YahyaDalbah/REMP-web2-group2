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
  { path: '/dashboard/users', title: 'Users Management', icon: 'people' },
  { path: '/dashboard/properties', title: 'Properties', icon: 'home' },
  { path: '/dashboard/transactions', title: 'Transactions', icon: 'attach_money' },
  { path: '/dashboard/reports', title: 'Reports', icon: 'assessment' },
  { path: '/dashboard/inappropriate-listings', title: 'Inappropriate Listings', icon: 'report_problem' },
];
}
