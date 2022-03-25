import { Category } from "./Category.interface";

export interface Place {
    id:number,
    name: string,
    description: string,
    latitude: string,
    longitude: string,
    image: string,
    categories : Category[]
}