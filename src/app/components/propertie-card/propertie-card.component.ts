import { Component, input } from '@angular/core';
import { Property } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-propertie-card',
  imports: [CommonModule],
  templateUrl: './propertie-card.component.html',
  styleUrl: './propertie-card.component.scss'
})
export class PropertieCardComponent {
  property = input.required<Property>()
}
