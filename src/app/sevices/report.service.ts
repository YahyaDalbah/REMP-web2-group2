import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Report } from '../models/report.model';


@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://127.0.0.1:8000/api/reports';

  
  getReports(): Observable<Report[]> {
    return this.http.get<Report[]>(this.apiUrl);
  }

  
  generateReport(type: string): Observable<Report> {
    return this.http.post<Report>(`${this.apiUrl}/generate`, { type });
  }

  
  exportReportToPDF(reportId: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/${reportId}/export/pdf`);
  }

  
  exportReportToExcel(reportId: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/${reportId}/export/excel`);
  }
  createReport(type: string): Observable<Report> {
  return this.http.post<Report>(`${this.apiUrl}/reports`, { type });
}

}
