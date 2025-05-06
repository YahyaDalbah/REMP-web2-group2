import { Component, inject, OnInit } from '@angular/core';
import { PropertyService } from '../../sevices/poperty.service';
import { Property } from '../../types';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-property-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './crud-properties.component.html',
  styleUrls: ['./crud-properties.component.scss'],
})
export class CrudPropertiesComponent {
  selectedProperty: Property | null = null;
  propertyService = inject(PropertyService);
  userId: number;
  properties: Property[] = [];

  constructor(private route: ActivatedRoute) {
    this.userId = Number(this.route.snapshot.params['userId']);
    this.properties = this.propertyService.getPropertiesByUserId(this.userId);
  }

  deleteProperty(id: number): void {
    this.propertyService.deleteProperty(id);
    this.properties = this.propertyService.getPropertiesByUserId(this.userId);
    this.selectedProperty = null;
  }
}
