import { Injectable } from '@angular/core';
import { Property } from '../types';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private properties: Property[] = [
    {
      id: 1,
      userId: 1,
      title: 'Modern Apartment',
      location: 'Central Business District',
      price: 200000,
      image: 'assets/home1.avif',
      images: ['assets/home1.avif', 'assets/home2.avif'],
      description: "Beautifully remodeled 5bd 3bth single story home with spacious living on quiet tree-lined street in guard-gated Pinecrest by the Sea. Chicago brick paved circular driveway & porte cochere. Updates include new kitchen w/top line appliances, new bathroom cabinetry, plantation shutter window treatments, lighting, interior doors/hardware, smart home system. Laundry room. AC garage set up as gym. Full impact windows/doors, gas cooking & hot water heater. Screened pool/veranda for outdoor fun & relaxation. Basketball court & green space for play on .34 ac lot w/newly refreshed landscaping/lighting/irrigation. PBTS is treasured for it's true sense of community with a park & quiet closed-end streets & is considered one of the most well regarded areas w/best in public/private schools right nearby.",
      forRent: false,
      forSale: true,
      bedrooms: 1,
      bathrooms: 1,
    },
    {
      id: 2,
      userId: 1,
      title: 'Village Department',
      location: 'Central Business District',
      price: 500000,
      image: 'assets/home2.avif',
      images: ['assets/home2.avif', 'assets/home3.jpg'],
      description: "Beautifully remodeled 5bd 3bth single story home with spacious living on quiet tree-lined street in guard-gated Pinecrest by the Sea. Chicago brick paved circular driveway & porte cochere. Updates include new kitchen w/top line appliances, new bathroom cabinetry, plantation shutter window treatments, lighting, interior doors/hardware, smart home system. Laundry room. AC garage set up as gym. Full impact windows/doors, gas cooking & hot water heater. Screened pool/veranda for outdoor fun & relaxation. Basketball court & green space for play on .34 ac lot w/newly refreshed landscaping/lighting/irrigation. PBTS is treasured for it's true sense of community with a park & quiet closed-end streets & is considered one of the most well regarded areas w/best in public/private schools right nearby.",
      forRent: false,
      forSale: true,
      bedrooms: 2,
      bathrooms: 2,
    },
    {
      id: 3,
      userId: 1,
      title: 'Big Villa',
      location: 'Central Business District',
      price: 650000,
      image: 'assets/home3.jpg',
      images: ['assets/home3.jpg', 'assets/home4.jpg'],
      description: "Beautifully remodeled 5bd 3bth single story home with spacious living on quiet tree-lined street in guard-gated Pinecrest by the Sea. Chicago brick paved circular driveway & porte cochere. Updates include new kitchen w/top line appliances, new bathroom cabinetry, plantation shutter window treatments, lighting, interior doors/hardware, smart home system. Laundry room. AC garage set up as gym. Full impact windows/doors, gas cooking & hot water heater. Screened pool/veranda for outdoor fun & relaxation. Basketball court & green space for play on .34 ac lot w/newly refreshed landscaping/lighting/irrigation. PBTS is treasured for it's true sense of community with a park & quiet closed-end streets & is considered one of the most well regarded areas w/best in public/private schools right nearby.",
      forRent: true,
      forSale: false,
      bedrooms: 2,
      bathrooms: 3,
    },
    {
      id: 4,
      userId: 2,
      title: 'Suburban Family Home',
      location: 'Green Valley Suburbs',
      price: 750000,
      image: 'assets/home4.jpg',
      images: ['assets/home4.jpg', 'assets/home5.avif'],
      description: "Beautifully remodeled 5bd 3bth single story home with spacious living on quiet tree-lined street in guard-gated Pinecrest by the Sea. Chicago brick paved circular driveway & porte cochere. Updates include new kitchen w/top line appliances, new bathroom cabinetry, plantation shutter window treatments, lighting, interior doors/hardware, smart home system. Laundry room. AC garage set up as gym. Full impact windows/doors, gas cooking & hot water heater. Screened pool/veranda for outdoor fun & relaxation. Basketball court & green space for play on .34 ac lot w/newly refreshed landscaping/lighting/irrigation. PBTS is treasured for it's true sense of community with a park & quiet closed-end streets & is considered one of the most well regarded areas w/best in public/private schools right nearby.",
      forRent: true,
      forSale: false,
      bedrooms: 3,
      bathrooms: 3,
    },
    {
      id: 5,
      userId: 2,
      title: 'Beachfront Villa',
      location: 'Ocean View Coast',
      price: 1200000,
      image: 'assets/home5.avif',
      images: ['assets/home5.avif', 'assets/home6.webp'],
      description: "Beautifully remodeled 5bd 3bth single story home with spacious living on quiet tree-lined street in guard-gated Pinecrest by the Sea. Chicago brick paved circular driveway & porte cochere. Updates include new kitchen w/top line appliances, new bathroom cabinetry, plantation shutter window treatments, lighting, interior doors/hardware, smart home system. Laundry room. AC garage set up as gym. Full impact windows/doors, gas cooking & hot water heater. Screened pool/veranda for outdoor fun & relaxation. Basketball court & green space for play on .34 ac lot w/newly refreshed landscaping/lighting/irrigation. PBTS is treasured for it's true sense of community with a park & quiet closed-end streets & is considered one of the most well regarded areas w/best in public/private schools right nearby.",
      forRent: true,
      forSale: true,
      bedrooms: 4,
      bathrooms: 3,
    },
  ];

  private nextId = 6; //if we use length instead of nextId, we will have duplicate ids after deletion

  getProperties(): Property[] {
    return this.properties;
  }
  getPropertiesByUserId(userId: number): Property[] {
    return this.properties.filter(property => property.userId === userId);
  }
  getPropertyById(id: number): Property | undefined {
    return this.properties.find((p) => p.id === id);
  }

  addProperty(property: Property): void {
    
    property.id = this.nextId++;
    this.properties.push(property);
  }

  updateProperty(updatedProperty: Property): void {
    const index = this.properties.findIndex((p) => p.id === updatedProperty.id);
    if (index !== -1) {
      this.properties[index] = updatedProperty;
    }
  }

  deleteProperty(id: number): void {
    this.properties = this.properties.filter((p) => p.id !== id);
  }
}
