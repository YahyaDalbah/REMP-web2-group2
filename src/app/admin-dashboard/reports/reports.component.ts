import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportService } from '../services/report.service';
import { Report } from '../../models/report.model';

@Component({
  standalone: true,
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ReportsComponent implements OnInit {
  reports: Report[] = [];
  selectedReportType: string = '';
  selectedReport: Report | null = null;

  reportTypes = [
    { id: 'properties', name: 'Properties Report' },
    { id: 'users', name: 'Users Report' },
    { id: 'transactions', name: 'Transactions Report' }
  ];

  constructor(private reportService: ReportService) {}

  ngOnInit(): void {
    this.loadReports();
  }

  loadReports() {
    this.reportService.getReports().subscribe((data: Report[]) => {
      this.reports = data;
    });
  }

  generateReport() {
  if (!this.selectedReportType) return;

  this.reportService.generateReport(this.selectedReportType).subscribe((data) => {
    const report: Report = {
      id: this.selectedReportType + '-' + Date.now(),
      title: this.selectedReportType.toUpperCase() + ' Report',
      description: 'Auto-generated report from backend data',
      type: 'bar',
      data: {
        labels: Object.keys(data),
        datasets: [{
          label: 'Counts',
          data: Object.values(data),
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      createdAt: new Date()
    };

    this.reports.push(report);
  });
}




  viewReport(report: Report) {
    this.selectedReport = report;
  }

  closeReport() {
    this.selectedReport = null;
  }

  exportToPDF(reportId: string) {
    this.reportService.exportReportToPDF(reportId).subscribe((blob: Blob) => {
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }

  exportToExcel(reportId: string) {
    this.reportService.exportReportToExcel(reportId).subscribe((blob: Blob) => {
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }
}
