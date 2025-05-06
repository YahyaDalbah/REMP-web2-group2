import { Component } from '@angular/core';
import { ImageSliderComponent } from '../../components/image-slider/image-slider.component';
import { PropertiesHomeComponent } from '../../components/properties/properties.component';

@Component({
  selector: 'app-home',
  imports: [ImageSliderComponent, PropertiesHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
