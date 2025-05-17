export type Property = {
  id: number;
  title: string;
  image: string;
  images: string[];
  location: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  price: number;
  owner_id: number;
  isForRent: boolean;
  isForSale: boolean;
  status: string;
};
