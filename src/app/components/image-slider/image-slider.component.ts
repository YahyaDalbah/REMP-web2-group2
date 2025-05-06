import { CommonModule } from '@angular/common';
import { Component, ElementRef, input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  imports: [CommonModule],
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent {
  activeIndex = 0;
  slides = input.required<String[]>();
  showSearchBar = input.required<boolean>();

  prevSlide() {
    this.activeIndex =
      this.activeIndex === 0 ? this.slides().length - 1 : this.activeIndex - 1;
  }

  nextSlide() {
    this.activeIndex =
      this.activeIndex === this.slides().length - 1 ? 0 : this.activeIndex + 1;
  }
}
