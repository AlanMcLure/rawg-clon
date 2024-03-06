export interface Game {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  isOnSale: boolean;
  quantityInStock: number;
  rating: number;
  releaseDate: Date;
}