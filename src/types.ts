export interface BookingItem {
  _id?: string | { $oid: string };
  id?: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  images: string[];
  price: number;
  location: string;
  rating: number;
  reviewsCount: number;
  category: string;
  availability: boolean;
}