import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Property } from '../types';

@Injectable({ providedIn: 'root' })
export class PropertyService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8000/api/properties';
  error = signal<string | null>(null);

  getProperties(status?: string): Observable<Property[]> {
    return this.http
      .get<Property[]>(this.apiUrl, {
        params: status ? { status } : {},
      })
      .pipe(catchError(this.handleError));
  }

  createProperty(property: Omit<Property, 'id'>): Observable<Property> {
    return this.http
      .post<Property>(this.apiUrl, {
        ...property,
        images: property.images.filter((url) => url.trim() !== ''),
      })
      .pipe(catchError(this.handleError));
  }
  getPropertyById(id: number) {
    return this.http
      .get<Property>(this.apiUrl + `/${id}`)
      .pipe(catchError(this.handleError));
  }
  getPropertiesByOwnerId(ownerid: number, status?: string) {
    return this.http
      .get<Property[]>(this.apiUrl, {
        params: status ? { ownerid, status } : { ownerid },
      })
      .pipe(catchError(this.handleError));
  }
  updateProperty(
    id: number,
    property: Omit<Property, 'id'>
  ): Observable<Property> {
    return this.http
      .put<Property>(`${this.apiUrl}/${id}`, property)
      .pipe(catchError(this.handleError));
  }
  deleteProperty(id: number) {
    return this.http
      .delete<void>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    this.error.set(error.error?.message || 'An error occurred');
    console.error(this.error);
    return throwError(() => this.error());
  }
}
