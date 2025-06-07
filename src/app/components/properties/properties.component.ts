import { Component, inject, input, OnInit } from '@angular/core';
import { PropertieCardComponent } from '../propertie-card/propertie-card.component';
import { Property } from '../../types';
import { CommonModule } from '@angular/common';
import { PropertyService } from '../../sevices/poperty.service';

@Component({
  selector: 'app-properties-home',
  imports: [PropertieCardComponent, CommonModule],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss',
})
//this is used in the home page only
export class PropertiesHomeComponent implements OnInit {
  title = input.required<String>();
  isForRent = input.required<boolean>();
  propertiesService = inject(PropertyService);
  properties: Property[] = [];
  ngOnInit(): void {
    this.propertiesService.getProperties("available").subscribe({
      next: (data) => (this.properties = data),
    });
  }

  get filteredProperties() {
    return this.properties
      .filter((property) =>
        this.isForRent() ? property.isForRent : property.isForSale
      )
      .slice(0, 3);
  }
}
