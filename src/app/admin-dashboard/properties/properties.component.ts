import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PropertyService } from '../services/property.service';
import { Property } from '../models/property.model';

@Component({
  selector: 'app-admin-properties',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class AdminPropertiesComponent implements OnInit {
  properties: Property[] = [];
  filteredProperties: Property[] = [];
  searchTerm: string = '';
  statusFilter: string = 'all';
  typeFilter: string = 'all';
  selectedProperty: Property | null = null;

  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.loadProperties();
  }

  loadProperties(): void {
    this.propertyService.getProperties().subscribe(properties => {
      this.properties = properties;
      this.applyFilters();
    });
  }

  applyFilters(): void {
    this.filteredProperties = this.properties.filter(property => {
      const matchesSearch = property.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
                           property.location.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesStatus = this.statusFilter === 'all' || property.status === this.statusFilter;
      const matchesType = this.typeFilter === 'all' || property.type === this.typeFilter;
      
      return matchesSearch && matchesStatus && matchesType;
    });
  }

  onSearch(): void {
    this.applyFilters();
  }

  onStatusFilterChange(): void {
    this.applyFilters();
  }

  onTypeFilterChange(): void {
    this.applyFilters();
  }

  updatePropertyStatus(property: Property, status: 'available' | 'sold' | 'pending' | 'flagged'): void {
    this.propertyService.updatePropertyStatus(property.id, status).subscribe(() => {
      property.status = status;
    });
  }

  deleteProperty(id: number): void {
    if (confirm('Are you sure you want to delete this property?')) {
      this.propertyService.deleteProperty(id).subscribe(success => {
        if (success) {
          this.loadProperties();
        }
      });
    }
  }

  viewPropertyDetails(property: Property): void {
    this.selectedProperty = property;
  }

  closePropertyDetails(): void {
    this.selectedProperty = null;
  }
}
