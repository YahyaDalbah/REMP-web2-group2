
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rating-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="rating-container">
      <span class="rating-text">Rate our app : </span>
      <div class="stars">
        <i *ngFor="let star of stars" 
           class="fa fa-star-o"
           [class.fa-star]="star <= (hoveredStar || rating)"
           [class.text-warning]="star <= (hoveredStar || rating)"
           (click)="setRating(star)"
           (mouseenter)="onStarHover(star)"
           (mouseleave)="onStarLeave()">
        </i>
      </div>
    </div>
  `,
  styles: [`
    .rating-container {
      display: inline-flex;
      align-items: center;
      gap: 10px;
    }
    .rating-text {
      font-size: 16px;
      color: #333;
    }
    .stars {
      display: inline-flex;
      gap: 4px;
    }
    .stars i {
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: 20px;
    }
    .stars i:hover {
      transform: scale(1.1);
    }
    .text-warning {
      color: #ffa500;
    }
  `]
})
export class RatingModalComponent {
  @Output() ratingChange = new EventEmitter<number>();
  rating: number = 0;
  hoveredStar: number = 0;
  stars: number[] = [1, 2, 3, 4, 5];

  setRating(value: number) {
    this.rating = value;
    this.ratingChange.emit(this.rating);
    alert('Thanks for rating!');
  }

  onStarHover(star: number): void {
    this.hoveredStar = star;
  }

  onStarLeave(): void {
    this.hoveredStar = 0;
  }
}



 


