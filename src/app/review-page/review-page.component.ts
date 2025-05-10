import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-review-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent {
  showModal = false;
  reviewText: string = '';
  rating: number = 1;
  reviews = [
    { text: 'Great property!', rating: 5 },
    { text: 'Needs some improvements.', rating: 3 }
  ];

  openModal() {
    this.showModal = true;
  }

  onModalClose() {
    this.showModal = false;
  }

  onModalSubmit(event: { text: string; rating: number }) {
    this.reviews.push(event);
    this.showModal = false;
  }

  submitReview() {
    if (this.reviewText && this.rating) {
      this.reviews.push({ text: this.reviewText, rating: this.rating });
      this.reviewText = '';
      this.rating = 1;
    } 
  }
}
