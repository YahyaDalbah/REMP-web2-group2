import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})

 
export class FeedbackComponent {
  feedbackText: string = '';
  isPositive: boolean | null = null;

  setFeedbackType(isPositive: boolean) {
    this.isPositive = isPositive;
  }

  onSubmit() {
    if (this.isPositive !== null) {
      alert('Thank you for your feedback!');
      this.feedbackText = '';
      this.isPositive = null;
    } else {
      alert('Please select whether your experience was positive or negative.');
    }
  }

  onCancel() {
    this.feedbackText = '';
    this.isPositive = null;
  }
}
