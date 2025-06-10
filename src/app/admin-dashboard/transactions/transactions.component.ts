import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Transaction } from '../models/transaction.model';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  filteredTransactions: Transaction[] = [];
  selectedTransaction: Transaction | null = null;

  searchTerm: string = '';
  statusFilter: string = 'all';

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.transactionService.getTransactions().subscribe({
      next: (data) => {
        this.transactions = data;
        this.applyFilters();
      },
      error: (err) => {
        console.error('Failed to load transactions:', err);
      }
    });
  }

  applyFilters(): void {
    this.filteredTransactions = this.transactions.filter(transaction => {
      const matchesSearch = transaction.propertyTitle.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                             transaction.buyerName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                             transaction.sellerName.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesStatus = this.statusFilter === 'all' || transaction.status === this.statusFilter;

      return matchesSearch && matchesStatus;
    });
  }

  onSearch(): void {
    this.applyFilters();
  }

  onStatusFilterChange(): void {
    this.applyFilters();
  }

  trackByTransactionId(index: number, transaction: Transaction): number {
    return transaction.id;
  }

  viewTransactionDetails(transaction: Transaction): void {
    this.selectedTransaction = transaction;
  }

  closeTransactionDetails(): void {
    this.selectedTransaction = null;
  }

  updateTransactionStatus(transaction: Transaction, status: 'pending' | 'completed' | 'cancelled'): void {
    this.transactionService.updateTransactionStatus(transaction.id, status).subscribe({
      next: (updated) => {
        transaction.status = updated.status;
        this.applyFilters();
      },
      error: (err) => {
        console.error('Failed to update status:', err);
      }
    });
  }
}
