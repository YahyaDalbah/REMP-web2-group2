import { Component, input } from '@angular/core';
import { PropertieCardComponent } from '../propertie-card/propertie-card.component';
import { Property } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-properties-home',
  imports: [PropertieCardComponent, CommonModule],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss',
})
export class PropertiesHomeComponent {
  title = input.required<String>();
  isForRent = input.required<boolean>();
  properties: Property[] = [
    {
      title: 'Modern Downtown Apartment',
      location: 'Central Business District',
      price: 200000,
      image: 'assets/home1.avif',
      desc: "Beautifully remodeled 5bd 3bth single story home with spacious living on quiet tree-lined street in guard-gated Pinecrest by the Sea. Chicago brick paved circular driveway & porte cochere. Updates include new kitchen w/top line appliances, new bathroom cabinetry, plantation shutter window treatments, lighting, interior doors/hardware, smart home system. Laundry room. AC garage set up as gym. Full impact windows/doors, gas cooking & hot water heater. Screened pool/veranda for outdoor fun & relaxation. Basketball court & green space for play on .34 ac lot w/newly refreshed landscaping/lighting/irrigation. PBTS is treasured for it's true sense of community with a park & quiet closed-end streets & is considered one of the most well regarded areas w/best in public/private schools right nearby.",
      forRent: false,
      forSale: true,
      beds: 1,
      baths: 1,
    },
    {
      title: 'Village Department',
      location: 'Central Business District',
      price: 500000,
      image: 'assets/home2.avif',
      desc: "Beautifully remodeled 5bd 3bth single story home with spacious living on quiet tree-lined street in guard-gated Pinecrest by the Sea. Chicago brick paved circular driveway & porte cochere. Updates include new kitchen w/top line appliances, new bathroom cabinetry, plantation shutter window treatments, lighting, interior doors/hardware, smart home system. Laundry room. AC garage set up as gym. Full impact windows/doors, gas cooking & hot water heater. Screened pool/veranda for outdoor fun & relaxation. Basketball court & green space for play on .34 ac lot w/newly refreshed landscaping/lighting/irrigation. PBTS is treasured for it's true sense of community with a park & quiet closed-end streets & is considered one of the most well regarded areas w/best in public/private schools right nearby.",
      forRent: false,
      forSale: true,
      beds: 2,
      baths: 2,
    },
    {
      title: 'Big Villa',
      location: 'Central Business District',
      price: 650000,
      image: 'assets/home3.jpg',
      desc: "Beautifully remodeled 5bd 3bth single story home with spacious living on quiet tree-lined street in guard-gated Pinecrest by the Sea. Chicago brick paved circular driveway & porte cochere. Updates include new kitchen w/top line appliances, new bathroom cabinetry, plantation shutter window treatments, lighting, interior doors/hardware, smart home system. Laundry room. AC garage set up as gym. Full impact windows/doors, gas cooking & hot water heater. Screened pool/veranda for outdoor fun & relaxation. Basketball court & green space for play on .34 ac lot w/newly refreshed landscaping/lighting/irrigation. PBTS is treasured for it's true sense of community with a park & quiet closed-end streets & is considered one of the most well regarded areas w/best in public/private schools right nearby.",
      forRent: true,
      forSale: false,
      beds: 2,
      baths: 3,
    },
    {
      title: 'Suburban Family Home',
      location: 'Green Valley Suburbs',
      price: 750000,
      image: 'assets/home4.jpg',
      desc: "Beautifully remodeled 5bd 3bth single story home with spacious living on quiet tree-lined street in guard-gated Pinecrest by the Sea. Chicago brick paved circular driveway & porte cochere. Updates include new kitchen w/top line appliances, new bathroom cabinetry, plantation shutter window treatments, lighting, interior doors/hardware, smart home system. Laundry room. AC garage set up as gym. Full impact windows/doors, gas cooking & hot water heater. Screened pool/veranda for outdoor fun & relaxation. Basketball court & green space for play on .34 ac lot w/newly refreshed landscaping/lighting/irrigation. PBTS is treasured for it's true sense of community with a park & quiet closed-end streets & is considered one of the most well regarded areas w/best in public/private schools right nearby.",
      forRent: true,
      forSale: false,
      beds: 3,
      baths: 3,
    },
    {
      title: 'Beachfront Villa',
      location: 'Ocean View Coast',
      price: 1200000,
      image: 'assets/home5.avif',
      desc: "Beautifully remodeled 5bd 3bth single story home with spacious living on quiet tree-lined street in guard-gated Pinecrest by the Sea. Chicago brick paved circular driveway & porte cochere. Updates include new kitchen w/top line appliances, new bathroom cabinetry, plantation shutter window treatments, lighting, interior doors/hardware, smart home system. Laundry room. AC garage set up as gym. Full impact windows/doors, gas cooking & hot water heater. Screened pool/veranda for outdoor fun & relaxation. Basketball court & green space for play on .34 ac lot w/newly refreshed landscaping/lighting/irrigation. PBTS is treasured for it's true sense of community with a park & quiet closed-end streets & is considered one of the most well regarded areas w/best in public/private schools right nearby.",
      forRent: true,
      forSale: true,
      beds: 4,
      baths: 3,
    },
  ];

  get filteredProperties() {
    return this.properties.filter((property) =>
      this.isForRent() ? property.forRent : property.forSale
    );
  }
}
