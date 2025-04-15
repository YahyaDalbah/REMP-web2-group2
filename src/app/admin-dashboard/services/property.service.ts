import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Property } from '../models/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private properties: Property[] = [
    {
      id: 1,
      title: 'Modern Apartment in Downtown',
      type: 'Apartment',
      location: 'Downtown, City Center',
      price: 250000,
      status: 'available',
      ownerId: 2,
      ownerName: 'Jane Smith',
      createdDate: new Date('2023-03-15'),
      images: ['assets/images/property1.jpg', 'assets/images/property1-2.jpg']
    },
    {
      id: 2,
      title: 'Luxury Villa with Pool',
      type: 'Villa',
      location: 'Beachfront, Coastal Area',
      price: 1200000,
      status: 'pending',
      ownerId: 4,
      ownerName: 'Emily Davis',
      createdDate: new Date('2023-02-20'),
      images: ['assets/images/property2.jpg', 'assets/images/property2-2.jpg']
    },
    {
      id: 3,
      title: 'Cozy Studio for Students',
      type: 'Studio',
      location: 'University District',
      price: 120000,
      status: 'sold',
      ownerId: 2,
      ownerName: 'Jane Smith',
      createdDate: new Date('2023-01-10'),
      images: ['assets/images/property3.jpg']
    },
    {
      id: 4,
      title: 'Family House with Garden',
      type: 'House',
      location: 'Suburban Area',
      price: 450000,
      status: 'available',
      ownerId: 4,
      ownerName: 'Emily Davis',
      createdDate: new Date('2023-04-05'),
      images: ['assets/images/property4.jpg', 'assets/images/property4-2.jpg']
    },
    {
      id: 5,
      title: 'Penthouse with City View',
      type: 'Penthouse',
      location: 'City Center',
      price: 850000,
      status: 'flagged',
      ownerId: 3,
      ownerName: 'Robert Johnson',
      createdDate: new Date('2023-03-25'),
      images: ['assets/images/property5.jpg']
    }
  ];

  constructor() { }

  getProperties(): Observable<Property[]> {
    return of(this.properties);
  }

  getPropertyById(id: number): Observable<Property | undefined> {
    const property = this.properties.find(p => p.id === id);
    return of(property);
  }

  updatePropertyStatus(id: number, status: 'available' | 'sold' | 'pending' | 'flagged'): Observable<Property | undefined> {
    const propertyIndex = this.properties.findIndex(p => p.id === id);
    if (propertyIndex !== -1) {
      this.properties[propertyIndex].status = status;
      return of(this.properties[propertyIndex]);
    }
    return of(undefined);
  }

  deleteProperty(id: number): Observable<boolean> {
    const initialLength = this.properties.length;
    this.properties = this.properties.filter(p => p.id !== id);
    return of(this.properties.length !== initialLength);
  }
}
