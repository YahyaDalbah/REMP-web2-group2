export interface ReportedListing {
  id: number;
  propertyId: number;
  propertyTitle: string;
  reportedBy: number;
  reporterName: string;
  reason: string;
  description: string;
  reportDate: Date;
  status: 'pending' | 'reviewed' | 'removed';
  images: string[];
}