import { Picture } from "./picture.types";

export interface Item {
  id: string;
  title: string;
  condition: string;
  initialQuantity: number;
  pictures: Picture[];
  price: number;
  thumbnail?: string;
  officialStoreName?: string;
  description?: string;
}
