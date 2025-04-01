import { Component, inject, OnInit, signal } from '@angular/core';
import { Property } from '../../types';
import { PropertieCardComponent } from '../../components/propertie-card/propertie-card.component';
import { CommonModule } from '@angular/common';
import { PropertyService } from '../../sevices/poperty.service';

@Component({
  selector: 'app-properties',
  imports: [PropertieCardComponent, CommonModule],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss',
})
export class PropertiesComponent implements OnInit {
  currentPage = 1;
  pageSize = 3;
  propertiyService = inject(PropertyService);
  properties: Property[] = [];

  ngOnInit(): void {
    this.properties = this.propertiyService.getProperties();
  }

  get paginatedProperties() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.properties.slice(startIndex, startIndex + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.properties.length / this.pageSize);
  }

  pageChanged(newPage: number) {
    this.currentPage = newPage;
  }

  getPageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
