import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactions: Transaction[] = [
    {
      id: 1,
      propertyId: 3,
      propertyTitle: 'Cozy Studio for Students',
      buyerId: 1,
      buyerName: 'John Doe',
      sellerId: 2,
      sellerName: 'Jane Smith',
      amount: 120000,
      status: 'completed',
      date: new Date('2023-02-15'),
      paymentMethod: 'Bank Transfer'
    },
    {
      id: 2,
      propertyId: 2,
      propertyTitle: 'Luxury Villa with Pool',
      buyerId: 5,
      buyerName: 'Michael Wilson',
      sellerId: 4,
      sellerName: 'Emily Davis',
      amount: 1200000,
      status: 'pending',
      date: new Date('2023-04-20'),
      paymentMethod: 'Mortgage'
    },
    {
      id: 3,
      propertyId: 1,
      propertyTitle: 'Modern Apartment in Downtown',
      buyerId: 3,
      buyerName: 'Robert Johnson',
      sellerId: 2,
      sellerName: 'Jane Smith',
      amount: 250000,
      status: 'cancelled',
      date: new Date('2023-03-10'),
      paymentMethod: 'Cash'
    },
    {
      id: 4,
      propertyId: 4,
      propertyTitle: 'Family House with Garden',
      buyerId: 1,
      buyerName: 'John Doe',
      sellerId: 4,
      sellerName: 'Emily Davis',
      amount: 450000,
      status: 'pending',
      date: new Date('2023-05-05'),
      paymentMethod: 'Mortgage'
    }
  ];

  constructor() { }

  getTransactions(): Observable<Transaction[]> {
    return of(this.transactions);
  }

  getTransactionById(id: number): Observable<Transaction | undefined> {
    const transaction = this.transactions.find(t => t.id === id);
    return of(transaction);
  }

  updateTransactionStatus(id: number, status: 'pending' | 'completed' | 'cancelled'): Observable<Transaction | undefined> {
    const transactionIndex = this.transactions.findIndex(t => t.id === id);
    if (transactionIndex !== -1) {
      this.transactions[transactionIndex].status = status;
      return of(this.transactions[transactionIndex]);
    }
    return of(undefined);
  }
}
