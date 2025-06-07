import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Property } from '../types';

@Injectable({ providedIn: 'root' })
export class PropertyService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8000/api/properties';
  error = signal<string | null>(null);

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

  getProperties(status?: string): Observable<Property[]> {
    return this.http
      .get<Property[]>(this.apiUrl, {
        headers: this.getAuthHeaders(),
        params: status ? { status } : {},
      })
      .pipe(catchError(this.handleError));
  }

  createProperty(property: Omit<Property, 'id'>): Observable<Property> {
    return this.http
      .post<Property>(
        this.apiUrl,
        {
          ...property,
          images: property.images.filter((url) => url.trim() !== ''),
        },
        {
          headers: this.getAuthHeaders(),
        }
      )
      .pipe(catchError(this.handleError));
  }
  getPropertyById(id: number) {
    return this.http
      .get<Property>(this.apiUrl + `/${id}`, {
        headers: this.getAuthHeaders(),
      })
      .pipe(catchError(this.handleError));
  }
  getMyProperties(status?: string) {
    return this.http
      .get<Property[]>(this.apiUrl, {
        headers: this.getAuthHeaders(),
        params: status ? { mine: true, status } : { mine: true },
      })
      .pipe(catchError(this.handleError));
  }
  updateProperty(
    id: number,
    property: Omit<Property, 'id'>
  ): Observable<Property> {
    return this.http
      .put<Property>(`${this.apiUrl}/${id}`, property, {
        headers: this.getAuthHeaders(),
      })
      .pipe(catchError(this.handleError));
  }
  deleteProperty(id: number) {
    return this.http
      .delete<void>(`${this.apiUrl}/${id}`, {
        headers: this.getAuthHeaders(),
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    this.error.set(error.error?.message || 'An error occurred');
    console.error(this.error);
    return throwError(() => this.error());
  }
  uploadImages(selectedFiles: File[]) {
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append('images[]', file, file.name);
    });
    return this.http.post<any>(
      `${this.apiUrl}/upload-images`,
      formData,
      {
        reportProgress: true,
        observe: 'events',
      }
    );
  }
}
