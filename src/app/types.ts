export type Property = {
  id: number;
  userId: number;
  title: string;
  description: string;
  location: string;
  price: number;
  image: string;
  images: string[];
  forRent: boolean;
  forSale: boolean;
  bedrooms: number;
  bathrooms: number;
};