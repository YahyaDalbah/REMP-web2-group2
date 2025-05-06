import { Component, input } from '@angular/core';
import { Property } from '../../types';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-propertie-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './propertie-card.component.html',
  styleUrl: './propertie-card.component.scss'
})
export class PropertieCardComponent {
  property = input.required<Property>()
}