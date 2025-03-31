export type Property = {
  id: number;
  title: String;
  desc: String;
  location: String;
  price: number;
  image: String;
  images: String[];
  forRent: boolean;
  forSale: boolean;
  beds: number;
  baths: number;
};

export const properties: Property[] = [
  {
    id: 1,
    title: 'Modern Apartment',
    location: 'Central Business District',
    price: 200000,
    image: 'assets/home1.avif',
    images: ['assets/home1.avif', 'assets/home2.avif'],
    desc: "Beautifully remodeled 5bd 3bth single story home with spacious living on quiet tree-lined street in guard-gated Pinecrest by the Sea. Chicago brick paved circular driveway & porte cochere. Updates include new kitchen w/top line appliances, new bathroom cabinetry, plantation shutter window treatments, lighting, interior doors/hardware, smart home system. Laundry room. AC garage set up as gym. Full impact windows/doors, gas cooking & hot water heater. Screened pool/veranda for outdoor fun & relaxation. Basketball court & green space for play on .34 ac lot w/newly refreshed landscaping/lighting/irrigation. PBTS is treasured for it's true sense of community with a park & quiet closed-end streets & is considered one of the most well regarded areas w/best in public/private schools right nearby.",
    forRent: false,
    forSale: true,
    beds: 1,
    baths: 1,
  },
  {
    id: 2,
    title: 'Village Department',
    location: 'Central Business District',
    price: 500000,
    image: 'assets/home2.avif',
    images: ['assets/home2.avif', 'assets/home3.jpg'],
    desc: "Beautifully remodeled 5bd 3bth single story home with spacious living on quiet tree-lined street in guard-gated Pinecrest by the Sea. Chicago brick paved circular driveway & porte cochere. Updates include new kitchen w/top line appliances, new bathroom cabinetry, plantation shutter window treatments, lighting, interior doors/hardware, smart home system. Laundry room. AC garage set up as gym. Full impact windows/doors, gas cooking & hot water heater. Screened pool/veranda for outdoor fun & relaxation. Basketball court & green space for play on .34 ac lot w/newly refreshed landscaping/lighting/irrigation. PBTS is treasured for it's true sense of community with a park & quiet closed-end streets & is considered one of the most well regarded areas w/best in public/private schools right nearby.",
    forRent: false,
    forSale: true,
    beds: 2,
    baths: 2,
  },
  {
    id: 3,
    title: 'Big Villa',
    location: 'Central Business District',
    price: 650000,
    image: 'assets/home3.jpg',
    images: ['assets/home3.jpg', 'assets/home4.jpg'],
    desc: "Beautifully remodeled 5bd 3bth single story home with spacious living on quiet tree-lined street in guard-gated Pinecrest by the Sea. Chicago brick paved circular driveway & porte cochere. Updates include new kitchen w/top line appliances, new bathroom cabinetry, plantation shutter window treatments, lighting, interior doors/hardware, smart home system. Laundry room. AC garage set up as gym. Full impact windows/doors, gas cooking & hot water heater. Screened pool/veranda for outdoor fun & relaxation. Basketball court & green space for play on .34 ac lot w/newly refreshed landscaping/lighting/irrigation. PBTS is treasured for it's true sense of community with a park & quiet closed-end streets & is considered one of the most well regarded areas w/best in public/private schools right nearby.",
    forRent: true,
    forSale: false,
    beds: 2,
    baths: 3,
  },
  {
    id: 4,
    title: 'Suburban Family Home',
    location: 'Green Valley Suburbs',
    price: 750000,
    image: 'assets/home4.jpg',
    images: ['assets/home4.jpg', 'assets/home5.avif'],
    desc: "Beautifully remodeled 5bd 3bth single story home with spacious living on quiet tree-lined street in guard-gated Pinecrest by the Sea. Chicago brick paved circular driveway & porte cochere. Updates include new kitchen w/top line appliances, new bathroom cabinetry, plantation shutter window treatments, lighting, interior doors/hardware, smart home system. Laundry room. AC garage set up as gym. Full impact windows/doors, gas cooking & hot water heater. Screened pool/veranda for outdoor fun & relaxation. Basketball court & green space for play on .34 ac lot w/newly refreshed landscaping/lighting/irrigation. PBTS is treasured for it's true sense of community with a park & quiet closed-end streets & is considered one of the most well regarded areas w/best in public/private schools right nearby.",
    forRent: true,
    forSale: false,
    beds: 3,
    baths: 3,
  },
  {
    id: 5,
    title: 'Beachfront Villa',
    location: 'Ocean View Coast',
    price: 1200000,
    image: 'assets/home5.avif',
    images: ['assets/home5.avif', 'assets/home6.webp'],
    desc: "Beautifully remodeled 5bd 3bth single story home with spacious living on quiet tree-lined street in guard-gated Pinecrest by the Sea. Chicago brick paved circular driveway & porte cochere. Updates include new kitchen w/top line appliances, new bathroom cabinetry, plantation shutter window treatments, lighting, interior doors/hardware, smart home system. Laundry room. AC garage set up as gym. Full impact windows/doors, gas cooking & hot water heater. Screened pool/veranda for outdoor fun & relaxation. Basketball court & green space for play on .34 ac lot w/newly refreshed landscaping/lighting/irrigation. PBTS is treasured for it's true sense of community with a park & quiet closed-end streets & is considered one of the most well regarded areas w/best in public/private schools right nearby.",
    forRent: true,
    forSale: true,
    beds: 4,
    baths: 3,
  },
];
