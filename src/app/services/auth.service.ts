import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) {}

  login(userData: { email: string; password: string }) {
    return this.http.post(`${this.baseUrl}/login`, userData);
  }

  register(userData: any) {
    return this.http.post(`${this.baseUrl}/register`, userData);
  }
}
