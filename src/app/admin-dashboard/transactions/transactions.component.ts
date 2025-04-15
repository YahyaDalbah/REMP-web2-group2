import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Define the Transaction interface
interface Transaction {
  id: string;
  propertyTitle: string;
  propertyId: string;
  buyerName: string;
  buyerId: string;
  sellerName: string;
  sellerId: string;
  amount: number;
  status: string;
  date: Date;
  paymentMethod: string;
}

// Define the Property interface
interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  owner: string;
  isSold: boolean; // Add a flag to indicate if the property is sold
}

// Sample properties data
const properties: Property[] = [
  { id: '101', title: 'Luxury Villa', location: 'City Center', price: 500000, owner: 'Jane Smith', isSold: false },
  { id: '102', title: 'Beach House', location: 'Seaside', price: 750000, owner: 'Bob White', isSold: true },
  // Add more properties here
];

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  selectedTransaction: Transaction | null = null;
  searchTerm: string = '';
  statusFilter: string = 'all';
  transactions: Transaction[] = [
    {
      id: '1',
      propertyTitle: 'Luxury Villa',
      propertyId: '101',
      buyerName: 'John Doe',
      buyerId: '201',
      sellerName: 'Jane Smith',
      sellerId: '301',
      amount: 500000,
      status: 'pending',
      date: new Date('2023-10-01'),
      paymentMethod: 'Credit Card'
    },
    {
      id: '2',
      propertyTitle: 'Beach House',
      propertyId: '102',
      buyerName: 'Alice Brown',
      buyerId: '202',
      sellerName: 'Bob White',
      sellerId: '302',
      amount: 750000,
      status: 'completed',
      date: new Date('2023-09-15'),
      paymentMethod: 'Bank Transfer'
    },
    // Add more sample transactions here
  ];
  filteredTransactions: Transaction[] = [];

  constructor() {
    this.applyFilters();
  }

  onSearch(): void {
    this.applyFilters();
  }

  onStatusFilterChange(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredTransactions = this.transactions.filter(transaction => {
      const matchesSearchTerm = transaction.propertyTitle.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                                transaction.buyerName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                                transaction.sellerName.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesStatus = this.statusFilter === 'all' || transaction.status === this.statusFilter;
      return matchesSearchTerm && matchesStatus;
    });
  }

  trackByTransactionId(index: number, transaction: Transaction): string {
    return transaction.id;
  }

  updateTransactionStatus(transaction: Transaction, status: string): void {
    transaction.status = status;
    const property = this.getPropertyDetails(transaction.propertyId);
    if (property) {
      property.isSold = status === 'completed';
    }
    this.onStatusFilterChange(); // Reapply the filter to update the view
  }

  getPropertyDetails(propertyId: string): Property | undefined {
    return properties.find(property => property.id === propertyId);
  }

  viewTransactionDetails(transaction: Transaction): void {
    this.selectedTransaction = transaction;
    const propertyDetails = this.getPropertyDetails(transaction.propertyId);
    console.log('Selected Transaction:', this.selectedTransaction);
    console.log('Property Details:', propertyDetails);
  }
  
  closeTransactionDetails(): void {
    this.selectedTransaction = null;
  }

  updatePropertyStatus(propertyId: string, status: string): void {
    const property = this.getPropertyDetails(propertyId);
    if (property) {
      property.isSold = status === 'completed';
      const existingTransaction = this.transactions.find(transaction => transaction.propertyId === propertyId);

      if (!existingTransaction) {
        // Add a new transaction for the property if no existing transaction is found
        const newTransaction: Transaction = {
          id: (this.transactions.length + 1).toString(),
          propertyTitle: property.title,
          propertyId: property.id,
          buyerName: '', // Add buyer details if available
          buyerId: '',
          sellerName: property.owner,
          sellerId: '', // Add seller details if available
          amount: property.price,
          status: status,
          date: new Date(),
          paymentMethod: '' // Add payment method if available
        };
        this.transactions.push(newTransaction);
      } else {
        // Update the existing transaction status if found
        existingTransaction.status = status;
      }

      this.applyFilters(); // Update the filtered transactions
    }
  }
}
