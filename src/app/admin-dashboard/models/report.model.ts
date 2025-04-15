export interface ReportData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string[];
    borderColor?: string;
    borderWidth?: number;
  }[];
}

export interface Report {
  id: string;
  title: string;
  description: string;
  type: 'bar' | 'line' | 'pie' | 'doughnut';
  data: ReportData;
  createdAt: Date;
}