import { Place } from "./Place.interface";

export interface Route {
    id:number,
    name: string,
    time_in_hours: number,
    distance_in_km: number,
    places:Place[]
}