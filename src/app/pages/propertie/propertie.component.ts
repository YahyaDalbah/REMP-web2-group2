import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from '../../types';
import { ImageSliderComponent } from '../../components/image-slider/image-slider.component';
import { PropertyService } from '../../sevices/poperty.service';
import { ReviewComponent } from '../../review/review.component';
import { TransactionService } from '../../sevices/transactions.service';

@Component({
  selector: 'app-propertie',
  imports: [CommonModule, ImageSliderComponent],
  templateUrl: './propertie.component.html',
  styleUrl: './propertie.component.scss',
})
export class PropertieComponent {
  property!: Property;
  isFavorite = false;
  showContactForm = signal(false);
  propertyService = inject(PropertyService);
  transactionService = inject(TransactionService);
  properties: Property[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    const id = this.route.snapshot.params['id'];
    this.propertyService.getPropertyById(id).subscribe({
      next: (data) => {
        console.log(data);
        this.property = data;
      },
    });
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
  toggleContactForm() {
    this.showContactForm.update((prev) => !prev);
  }
  buyProperty(type: 'sale' | 'rent') {
    this.transactionService
      .createTransaction(this.property.id, type, this.property.price)
      .subscribe({
        next: (data) => {
          this.propertyService
            .updateProperty(this.property.id, {
              ...this.property,
              status: type == 'sale' ? 'sold' : 'rented',
            })
            .subscribe({
              next: (propertyData) => {
                // Show success alert
                alert(
                  `Property ${type} successful! Thank you for your purchase.`
                );

                this.router.navigate(['/review']);
              },
              error: (updateError) => {
                console.error('Failed to update property status:', updateError);
                alert(
                  'Transaction completed but property status update failed'
                );
              },
            });
        },
        error: (transactionError) => {
          console.error('Transaction failed:', transactionError);
          alert('Transaction failed. Please try again.');
        },
      });
  }
  
}
