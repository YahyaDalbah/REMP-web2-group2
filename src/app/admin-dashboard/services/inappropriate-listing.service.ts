import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ReportedListing } from '../models/reported-listing.model';

@Injectable({
  providedIn: 'root'
})
export class InappropriateListingService {
  private reportedListings: ReportedListing[] = [
    {
      id: 1,
      propertyId: 5,
      propertyTitle: 'Penthouse with City View',
      reportedBy: 1,
      reporterName: 'John Doe',
      reason: 'Misleading Information',
      description: 'The property description claims it has a pool, but there is no pool in the images or in reality.',
      reportDate: new Date('2023-05-10'),
      status: 'pending',
      images: ['assets/images/property5.jpg']
    },
    {
      id: 2,
      propertyId: 2,
      propertyTitle: 'Luxury Villa with Pool',
      reportedBy: 3,
      reporterName: 'Robert Johnson',
      reason: 'Inappropriate Content',
      description: 'The listing contains inappropriate language in the description.',
      reportDate: new Date('2023-05-15'),
      status: 'reviewed',
      images: ['assets/images/property2.jpg', 'assets/images/property2-2.jpg']
    },
    {
      id: 3,
      propertyId: 4,
      propertyTitle: 'Family House with Garden',
      reportedBy: 5,
      reporterName: 'Michael Wilson',
      reason: 'Fraudulent Listing',
      description: 'This property does not exist at the specified address. I visited the location and it was an empty lot.',
      reportDate: new Date('2023-05-20'),
      status: 'removed',
      images: ['assets/images/property4.jpg']
    },
    {
      id: 4,
      propertyId: 1,
      propertyTitle: 'Modern Apartment in Downtown',
      reportedBy: 2,
      reporterName: 'Jane Smith',
      reason: 'Price Manipulation',
      description: 'The price was suddenly increased by 50% after I showed interest.',
      reportDate: new Date('2023-05-25'),
      status: 'pending',
      images: ['assets/images/property1.jpg']
    }
  ];

  constructor() { }

  getReportedListings(): Observable<ReportedListing[]> {
    return of(this.reportedListings);
  }

  getReportedListingById(id: number): Observable<ReportedListing | undefined> {
    const listing = this.reportedListings.find(l => l.id === id);
    return of(listing);
  }

  updateListingStatus(id: number, status: 'pending' | 'reviewed' | 'removed'): Observable<ReportedListing | undefined> {
    const listingIndex = this.reportedListings.findIndex(l => l.id === id);
    if (listingIndex !== -1) {
      this.reportedListings[listingIndex].status = status;
      return of(this.reportedListings[listingIndex]);
    }
    return of(undefined);
  }

  removeListing(id: number): Observable<boolean> {
    const initialLength = this.reportedListings.length;
    this.reportedListings = this.reportedListings.filter(l => l.id !== id);
    return of(this.reportedListings.length !== initialLength);
  }
}