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
  properties: Property[] = [];
  selectedStatus: string = 'available';

  constructor(private route: ActivatedRoute) {
    this.loadProperties();
  }
  private loadProperties() {
    this.propertyService.getMyProperties(this.selectedStatus)
      .subscribe({
        next: (data) => this.properties = data,
        error: (err) => console.error('Error loading properties:', err)
      });
  }

  deleteProperty(id: number): void {
    this.propertyService.deleteProperty(id).subscribe({
      next: () => {
        this.loadProperties();
        this.selectedProperty = null;
      },
      error: (err) => console.error('Error deleting property:', err)
    });
  }
  onStatusChange(status: string) {
    this.selectedStatus = status;
    this.loadProperties();
  }
}
