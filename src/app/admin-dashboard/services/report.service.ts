import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private apiUrl = 'http://127.0.0.1:8000/api'; 

  constructor(private http: HttpClient) {}

  getReports(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/reports/overview`);
  }

  generateReport(type: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/reports/monthly`);
  }

  exportReportToPDF(reportId: string): Observable<Blob> {
    const blob = new Blob(['Fake PDF content'], { type: 'application/pdf' });
    return new Observable(observer => observer.next(blob));
  }

  exportReportToExcel(reportId: string): Observable<Blob> {
    const blob = new Blob(['Fake Excel content'], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    return new Observable(observer => observer.next(blob));
  }
  getNewPropertiesReport(): Observable<any[]> {
  return this.http.get<any[]>('http://127.0.0.1:8000/api/reports/properties/new');
}

}
