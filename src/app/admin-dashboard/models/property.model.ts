export interface Property {
  id: number;
  title: string;
  type: string;
  location: string;
  price: number;
  status: 'available' | 'sold' | 'pending' | 'flagged';
  ownerId: number;
  ownerName: string;
  createdDate: Date;
  images: string[];
}