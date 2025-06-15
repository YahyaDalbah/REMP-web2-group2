import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';
import { PropertyService } from '../services/property.service';
import { TransactionService } from '../services/transaction.service';
import { InappropriateListingService } from '../services/inappropriate-listing.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stats = {
    totalUsers: 0,
    activeUsers: 0,
    totalProperties: 0,
    availableProperties: 0,
    totalTransactions: 0,
    pendingTransactions: 0,
    reportedListings: 0,
    pendingReports: 0
  };

  recentTransactions: any[] = [];
  recentReportedListings: any[] = [];

  constructor(
    private userService: UserService,
    private propertyService: PropertyService,
    private transactionService: TransactionService,
    private inappropriateListingService: InappropriateListingService
  ) { }

  ngOnInit(): void {
    this.loadStats();
    this.loadRecentTransactions();
    this.loadRecentReportedListings();
  }

  loadStats(): void {
    // Load user stats
    this.userService.getUsers().subscribe(users => {
      this.stats.totalUsers = users.length;
      //this.stats.activeUsers = users.filter(user => user.status === 'active').length;
    });

    // Load property stats
    this.propertyService.getProperties().subscribe(properties => {
      this.stats.totalProperties = properties.length;
      this.stats.availableProperties = properties.filter(property => property.status === 'available').length;
    });

    // Load transaction stats
    this.transactionService.getTransactions().subscribe(transactions => {
      this.stats.totalTransactions = transactions.length;
      this.stats.pendingTransactions = transactions.filter(transaction => transaction.status === 'pending').length;
    });

    // Load reported listings stats
    this.inappropriateListingService.getReportedListings().subscribe(listings => {
      this.stats.reportedListings = listings.length;
      this.stats.pendingReports = listings.filter(listing => listing.status === 'pending').length;
    });
  }

  loadRecentTransactions(): void {
    this.transactionService.getTransactions().subscribe(transactions => {
      // Sort by date (newest first) and take the first 5
      this.recentTransactions = transactions
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 5);
    });
  }

  loadRecentReportedListings(): void {
    this.inappropriateListingService.getReportedListings().subscribe(listings => {
      // Sort by date (newest first) and take the first 5
      this.recentReportedListings = listings
        .sort((a, b) => new Date(b.reportDate).getTime() - new Date(a.reportDate).getTime())
        .slice(0, 5);
    });
  }
}
