import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private readonly apiUrl = 'http://localhost:8000/api/transactions';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Accept': 'application/json',
    });
  }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiUrl, {
      headers: this.getAuthHeaders()
    }).pipe(catchError(this.handleError));
  }

  updateTransactionStatus(id: number, status: 'pending' | 'completed' | 'cancelled'): Observable<Transaction> {
    return this.http.put<Transaction>(`${this.apiUrl}/${id}`, { status }, {
      headers: this.getAuthHeaders()
    }).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('TransactionService error:', error);
    return throwError(() => error.message || 'Server error');
  }
}
