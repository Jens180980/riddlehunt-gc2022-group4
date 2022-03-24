import { Place } from "./Place.interface";

export interface Category{
    id:number,
    name:string,
    description: string,
    icon: string,
    places:Place[]
}