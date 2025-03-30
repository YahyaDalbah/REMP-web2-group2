import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  imports: [CommonModule],
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent {
  activeIndex = 0;
  slides = [
    'assets/home1.avif',
    'assets/home2.avif',
    'assets/home3.jpg'
  ];

  prevSlide() {
    this.activeIndex = this.activeIndex === 0 ? 
      this.slides.length - 1 : this.activeIndex - 1;
  }

  nextSlide() {
    this.activeIndex = this.activeIndex === this.slides.length - 1 ? 
      0 : this.activeIndex + 1;
  }
}