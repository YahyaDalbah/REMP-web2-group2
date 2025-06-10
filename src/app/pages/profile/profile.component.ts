import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  Transaction,
  TransactionService,
} from '../../sevices/transactions.service';
import { CommonModule } from '@angular/common';
import { PropertyService } from '../../sevices/poperty.service';
import { Property } from '../../types';

@Component({
  selector: 'app-profile',
  imports: [RouterLink, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  transactionService = inject(TransactionService);
  propertiesService = inject(PropertyService);
  transactions: Transaction[] = [];
  properties: Property[] = [];

  ngOnInit() {
    this.transactionService.getTransactions(true).subscribe({
      next: (data) => {
        this.transactions = data;
      },
    });
    this.propertiesService.getProperties().subscribe({
      next: (data) => {
        this.properties = data;
      },
    });
  }
  findProperty(propertId: number) {
    return this.properties.find((property) => propertId == property.id);
  }
  logout() {
    localStorage.removeItem('token');
  }
}
