import { Component, inject, OnInit, signal } from '@angular/core';
import { Property } from '../../types';
import { PropertieCardComponent } from '../../components/propertie-card/propertie-card.component';
import { CommonModule } from '@angular/common';
import { PropertyService } from '../../sevices/poperty.service';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-properties',
  imports: [PropertieCardComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss',
}) 
export class PropertiesComponent implements OnInit {
  currentPage = 1;
  pageSize = 3;
  propertiyService = inject(PropertyService);
  properties: Property[] = [];
  filteredProperties: Property[] = [];
  private fb = inject(FormBuilder);

  filterForm = this.fb.group({
    search: [''],
    forRent: [false],
    forSale: [false],
    bedrooms: [null],
    bathrooms: [null],
    minPrice: [null],
    maxPrice: [null],
  });

  applyFilters() {
    const filters = this.filterForm.value;
    this.filteredProperties = this.properties.filter((property) => {
      return (
        (!filters.search ||
          property.title
            .toLowerCase()
            .includes(filters.search.toLowerCase())) &&
        (!filters.forRent || property.forRent) &&
        (!filters.forSale || property.forSale) &&
        (!filters.bedrooms || filters.bedrooms == property.bedrooms) &&
        (!filters.bathrooms || filters.bathrooms == property.bathrooms) &&
        (!filters.minPrice || property.price >= filters.minPrice) &&
        (!filters.maxPrice || property.price <= filters.maxPrice)
      );
    });
    this.currentPage = 1;
  }

  ngOnInit(): void {
    this.properties = this.propertiyService.getProperties();
    this.applyFilters();
  }

  get paginatedProperties() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.filteredProperties.slice(
      startIndex,
      startIndex + this.pageSize
    );
  }

  get totalPages(): number {
    return Math.ceil(this.filteredProperties.length / this.pageSize);
  }

  pageChanged(newPage: number) {
    this.currentPage = newPage;
  }

  getPageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
