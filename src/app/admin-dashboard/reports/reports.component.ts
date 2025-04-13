import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportService } from '../services/report.service';
import { Report } from '../models/report.model';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  reports: Report[] = [];
  selectedReport: Report | null = null;
  reportTypes = [
    { id: 'sales-monthly', name: 'Monthly Sales' },
    { id: 'property-types', name: 'Property Types Distribution' },
    { id: 'user-registrations', name: 'User Registrations' },
    { id: 'transaction-status', name: 'Transaction Status' }
  ];
  selectedReportType: string = '';

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.loadReports();
  }

  loadReports(): void {
    this.reportService.getReports().subscribe(reports => {
      this.reports = reports;
    });
  }

  viewReport(report: Report): void {
    this.selectedReport = report;
  }

  closeReport(): void {
    this.selectedReport = null;
  }

  generateReport(): void {
    if (this.selectedReportType) {
      this.reportService.generateReport(this.selectedReportType).subscribe(report => {
        if (report) {
          alert(`Report "${report.title}" generated successfully!`);
          this.loadReports();
        }
      });
    }
  }

  exportToPDF(reportId: string): void {
    this.reportService.exportReportToPDF(reportId).subscribe(success => {
      if (success) {
        alert('Report exported to PDF successfully!');
      }
    });
  }

  exportToExcel(reportId: string): void {
    this.reportService.exportReportToExcel(reportId).subscribe(success => {
      if (success) {
        alert('Report exported to Excel successfully!');
      }
    });
  }
}
