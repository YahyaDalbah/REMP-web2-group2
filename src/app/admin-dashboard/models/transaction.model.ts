export interface Transaction {
  id: number;
  propertyId: number;
  propertyTitle: string;
  buyerId: number;
  buyerName: string;
  sellerId: number;
  sellerName: string;
  amount: number;
  status: 'pending' | 'completed' | 'cancelled';
  date: Date;
  paymentMethod: string;
}