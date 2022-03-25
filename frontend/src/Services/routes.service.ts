import axios from 'axios';
import { REACT_APP_BACKEND_HOST } from '../Config/config.env';
import { Route } from '../interfaces/Route.interface';

class RoutesService {

    static RoutesService: RoutesService;

    static getRoutesService() {
        if (!this.RoutesService)
            this.RoutesService = new RoutesService();

        return this.RoutesService;
    }

    async getRouteById(id: number): Promise<any> {
        return axios.get<Route>(REACT_APP_BACKEND_HOST + "/route/" + id)
    }

    async getRouteWithPlaces(id: number): Promise<any> {
        return axios.get<Route>(REACT_APP_BACKEND_HOST + "/route/withplaces/" + id)
    }

    async getRoutes(): Promise<any> {
        return axios.get<any>(REACT_APP_BACKEND_HOST + "/route");
    }

    async createRoute(route: Route): Promise<any> {
        return axios.post<Route>(REACT_APP_BACKEND_HOST + "/route", JSON.stringify(route))
    }


    async updateRoute(route: Route): Promise<any> {
        return axios.put<any>(REACT_APP_BACKEND_HOST + "/route/" + route.id, JSON.stringify(route))
    }


    async deleteRouteById(route: Route): Promise<any> {
        return axios.delete<any>(REACT_APP_BACKEND_HOST + "/route/" + route.id)
    }
    //methods
}
export default RoutesService;