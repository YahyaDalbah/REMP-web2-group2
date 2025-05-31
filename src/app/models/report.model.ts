export interface Report {
  id: string;
  title: string;
  description: string;
  type: 'bar' | 'pie' | 'line' | 'doughnut';
  data: any;
  createdAt: Date;
}
