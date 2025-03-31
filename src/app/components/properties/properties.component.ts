import { Component, input } from '@angular/core';
import { PropertieCardComponent } from '../propertie-card/propertie-card.component';
import { properties, Property } from '../../types';
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
  

  get filteredProperties() {
    return properties.filter((property) =>
      this.isForRent() ? property.forRent : property.forSale
    );
  }
}
