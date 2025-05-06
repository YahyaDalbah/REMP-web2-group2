import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-feedback.component.html',
  styleUrl: './user-feedback.component.scss'
}) 

export class UserFeedbackComponent {
  @Output() closeEvent = new EventEmitter<void>();
  feedbackText: string = '';
  isPositive: boolean | null = null;
  rating: number = 0;
  numbers: number[] = [1, 2, 3, 4, 5];

  setFeedback(positive: boolean): void {
    this.isPositive = positive;
  }

  setRating(value: number): void {
    this.rating = value;
  }

  onSubmit(): void {
    if (this.isValid()) {
      if (this.hasFeedback()) {
        alert('Thank you for your feedback!');
        this.closeEvent.emit();
        this.resetForm();
      } else {
        alert('Please select whether your experience was positive or negative');
      }

      console.log('Feedback:', {
        rating: this.rating,
        isPositive: this.isPositive,
        text: this.feedbackText
      });
    }
  }

  onClose(): void {
    if (this.hasFeedback()) {
      if (confirm('Are you sure you want to cancel your feedback?')) {
        this.resetForm();
        this.closeEvent.emit();
      }
    } else {
      this.closeEvent.emit();
    }
  }

  private resetForm(): void {
    this.feedbackText = '';
    this.isPositive = null;
    this.rating = 0;
  }

  private hasFeedback(): boolean {
    return this.feedbackText.trim().length > 0 || this.isPositive !== null || this.rating > 0;
  }

  isValid(): boolean {
    return this.rating > 0 || this.isPositive !== null || this.feedbackText.trim().length > 0;
  }
}
