
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-rating-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating-modal.component.html',
  styleUrls: ['./rating-modal.component.scss']
}) 
export class RatingModalComponent {
  @Output() closeEvent = new EventEmitter<void>();
  rating: number = 0;
  hoveredStar: number = 0;
  stars: number[] = [1, 2, 3, 4, 5];

  setRating(value: number) {
    this.rating = value;
  }

  onStarHover(star: number): void {
    this.hoveredStar = star;
  }

  onStarLeave(): void {
    this.hoveredStar = 0;
  }

  close() {
    this.closeEvent.emit();
  }

  onSubmit() {
    if (this.rating > 0) {
      this.closeEvent.emit();
    }
  }
}






