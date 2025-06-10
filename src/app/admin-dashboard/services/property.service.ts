import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Property } from '../models/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private apiUrl = 'http://localhost:8000/api/properties';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json'
    });
  }

  getProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(this.apiUrl, {
      headers: this.getAuthHeaders()
    });
  }

  getPropertyById(id: number): Observable<Property> {
    return this.http.get<Property>(`${this.apiUrl}/${id}`, {
      headers: this.getAuthHeaders()
    });
  }

  updatePropertyStatus(id: number, status: 'available' | 'sold' | 'pending' | 'flagged'): Observable<boolean> {
    return this.http.put(`${this.apiUrl}/${id}`, { status }, {
      headers: this.getAuthHeaders()
    }).pipe(
      map(() => true),
      catchError((err) => {
        console.error('Status update failed', err);
        return of(false);
      })
    );
  }

  deleteProperty(id: number): Observable<boolean> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, {
      headers: this.getAuthHeaders()
    }).pipe(
      map(() => true),
      catchError((err) => {
        console.error('Delete failed', err);
        return of(false);
      })
    );
  }
}
