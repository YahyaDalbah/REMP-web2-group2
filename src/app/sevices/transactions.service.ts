import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Transaction {
  id: number;
  property_id: number;
  buyer_id: number;
  transaction_type: 'sale' | 'rent';
  amount: number;
  start_date?: string;
  end_date?: string;
}

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private apiUrl = `http://localhost:8000/api/transactions`;
  private readonly http = inject(HttpClient);

  private getAuthToken(): string | null {
    console.log(localStorage);
    return localStorage.getItem('token');
  }

  private getAuthHeaders(): HttpHeaders {
    const token = this.getAuthToken();
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  // Get all transactions (optional filters)
  getTransactions(
    mine?: boolean,
    type?: 'sale' | 'rent'
  ): Observable<Transaction[]> {
    const params: any = {};
    if (mine) params.mine = 'true';
    if (type) params.type = type;

    return this.http.get<Transaction[]>(this.apiUrl, {
      params,
      headers: this.getAuthHeaders(),
    });
  }

  // Create a new transaction
  createTransaction(
    propertyId: number,
    transactionType: 'sale' | 'rent',
    amount: number,
    startDate?: string,
    endDate?: string
  ): Observable<Transaction> {
    return this.http.post<Transaction>(
      this.apiUrl,
      {
        property_id: propertyId,
        transaction_type: transactionType,
        amount: amount,
        start_date: startDate,
        end_date: endDate,
      },
      { headers: this.getAuthHeaders() }
    );
  }

  // Get single transaction by ID
  getTransaction(id: number): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.apiUrl}/${id}`, {
      headers: this.getAuthHeaders(),
    });
  }
}
