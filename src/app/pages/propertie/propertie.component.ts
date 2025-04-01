import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from '../../types';
import { ImageSliderComponent } from '../../components/image-slider/image-slider.component';
import { PropertyService } from '../../sevices/poperty.service';

@Component({
  selector: 'app-propertie',
  imports: [CommonModule, ImageSliderComponent],
  templateUrl: './propertie.component.html',
  styleUrl: './propertie.component.scss',
})
export class PropertieComponent {
  property: Property;
  isFavorite = false;
  showContactForm = signal(false);
  propertyService = inject(PropertyService);
  properties: Property[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.properties = this.propertyService.getProperties();
    const p = this.properties.find(
      (p) => p.id === +this.route.snapshot.params['id']
    );
    if (!p) {
      throw new Error(
        `Property with ID ${this.route.snapshot.params['id']} not found`
      );
    }
    this.property = p;
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
  toggleContactForm() {
    this.showContactForm.update((prev) => !prev);
  }
}
