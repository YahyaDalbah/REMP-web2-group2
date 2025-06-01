import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Report } from '../models/report.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private reports: Report[] = [
    {
      id: 'sales-monthly',
      title: 'Monthly Sales',
      description: 'Property sales by month for the current year',
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Sales Amount ($)',
          data: [120000, 190000, 300000, 500000, 200000, 350000, 400000, 220000, 300000, 450000, 250000, 350000],
          backgroundColor: [
            'rgba(54, 162, 235, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(54, 162, 235, 0.5)'
          ],
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      createdAt: new Date()
    },
    {
      id: 'property-types',
      title: 'Property Types Distribution',
      description: 'Distribution of properties by type',
      type: 'pie',
      data: {
        labels: ['Apartment', 'Villa', 'House', 'Studio', 'Penthouse'],
        datasets: [{
          label: 'Number of Properties',
          data: [45, 15, 25, 10, 5],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)'
          ],
          borderWidth: 1
        }]
      },
      createdAt: new Date()
    },
    {
      id: 'user-registrations',
      title: 'User Registrations',
      description: 'New user registrations over the last 6 months',
      type: 'line',
      data: {
        labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        datasets: [{
          label: 'New Users',
          data: [30, 45, 35, 60, 75, 65],
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2
        }]
      },
      createdAt: new Date()
    },
    {
      id: 'transaction-status',
      title: 'Transaction Status',
      description: 'Distribution of transactions by status',
      type: 'doughnut',
      data: {
        labels: ['Completed', 'Pending', 'Cancelled'],
        datasets: [{
          label: 'Number of Transactions',
          data: [65, 25, 10],
          backgroundColor: [
            'rgba(46, 204, 113, 0.5)',
            'rgba(243, 156, 18, 0.5)',
            'rgba(231, 76, 60, 0.5)'
          ],
          borderWidth: 1
        }]
      },
      createdAt: new Date()
    }
  ];

  constructor() { }

  getReports(): Observable<Report[]> {
    return of(this.reports);
  }

  getReportById(id: string): Observable<Report | undefined> {
    const report = this.reports.find(r => r.id === id);
    return of(report);
  }

  generateReport(reportType: string): Observable<Report | undefined> {
    // In a real application, this would generate a new report based on current data
    // For now, we'll just return an existing report
    return this.getReportById(reportType);
  }

exportReportToPDF(reportId: string): Observable<Blob> {
  const blob = new Blob(['Fake PDF content'], { type: 'application/pdf' });
  return of(blob);
}

exportReportToExcel(reportId: string): Observable<Blob> {
  const blob = new Blob(['Fake Excel content'], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  return of(blob);
}

}
