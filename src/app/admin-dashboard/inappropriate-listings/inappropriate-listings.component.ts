import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InappropriateListingService } from '../services/inappropriate-listing.service';
import { PropertyService } from '../services/property.service';
import { ReportedListing } from '../models/reported-listing.model';

@Component({
  selector: 'app-inappropriate-listings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inappropriate-listings.component.html',
  styleUrls: ['./inappropriate-listings.component.css']
})
export class InappropriateListingsComponent implements OnInit {
  reportedListings: ReportedListing[] = [];
  filteredListings: ReportedListing[] = [];
  searchTerm: string = '';
  statusFilter: string = 'all';
  selectedListing: ReportedListing | null = null;

  constructor(
    private inappropriateListingService: InappropriateListingService,
    private propertyService: PropertyService
  ) { }

  ngOnInit(): void {
    this.loadReportedListings();
  }

  loadReportedListings(): void {
    this.inappropriateListingService.getReportedListings().subscribe(listings => {
      this.reportedListings = listings;
      this.applyFilters();
    });
  }

  applyFilters(): void {
    this.filteredListings = this.reportedListings.filter(listing => {
      const matchesSearch = listing.propertyTitle.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
                           listing.reason.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           listing.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesStatus = this.statusFilter === 'all' || listing.status === this.statusFilter;
      
      return matchesSearch && matchesStatus;
    });
  }

  onSearch(): void {
    this.applyFilters();
  }

  onStatusFilterChange(): void {
    this.applyFilters();
  }

  updateListingStatus(listing: ReportedListing, status: 'pending' | 'reviewed' | 'removed'): void {
    this.inappropriateListingService.updateListingStatus(listing.id, status).subscribe(() => {
      listing.status = status;
      
      // If the status is 'removed', also update the property status to 'flagged'
      if (status === 'removed') {
        this.propertyService.updatePropertyStatus(listing.propertyId, 'flagged').subscribe();
      }
    });
  }

  removeListing(id: number): void {
    if (confirm('Are you sure you want to permanently remove this listing report?')) {
      this.inappropriateListingService.removeListing(id).subscribe(success => {
        if (success) {
          this.loadReportedListings();
          if (this.selectedListing && this.selectedListing.id === id) {
            this.selectedListing = null;
          }
        }
      });
    }
  }

  viewListingDetails(listing: ReportedListing): void {
    this.selectedListing = listing;
  }

  closeListingDetails(): void {
    this.selectedListing = null;
  }
}
