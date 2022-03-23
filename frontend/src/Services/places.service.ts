// import axios from "axios";
// import { useState, useEffect } from "react";

// const Fetch = (baseURL: any) => {
//   const [data, setData] = useState(null);

//   axios.get(baseURL).then((response) => {
//     setData(response.data);
//     console.log(response, "api");
//   });

//   return data;
// };

// export default Fetch;

import axios from "axios";
import { REACT_APP_BACKEND_HOST } from "../Config/config.env";
import { Place } from "../interfaces/Place.interface";

class PlaceService {
  static PlaceService: PlaceService;

  static getCategoryService() {
    if (!this.PlaceService) this.PlaceService = new PlaceService();

    return this.PlaceService;
  }

  async getPlaces(): Promise<any> {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    return axios.get<Place[]>(REACT_APP_BACKEND_HOST + "/place", {
      headers: headers,
    });
  };

  async addPlaceToRoute(place:Place):Promise<any>{
    return axios.post<Place>(REACT_APP_BACKEND_HOST+"/route/addplacetoroute/",JSON.stringify(place))
  }

  async getPlaceById(id:number): Promise<any>{
    return axios.get<Place>(REACT_APP_BACKEND_HOST+"/place/"+id)
  }

  async getPlacesOfCategory(id:number): Promise<any> {
    return axios.get<Place[]>(REACT_APP_BACKEND_HOST + "/category/getplaces/"+id);
  }

  async createPlace(place:Place):Promise<any>{
    return axios.post<Place>(REACT_APP_BACKEND_HOST+"/place",JSON.stringify(place))
  }

  async updatePlace(place:Place):Promise<any>{
    return axios.put<any>(REACT_APP_BACKEND_HOST+"/place/"+place.id,JSON.stringify(place))
  }

  async deletePlaceById(place:Place):Promise<any>{
    return axios.delete<any>(REACT_APP_BACKEND_HOST+"/place/"+place.id)
  }


}
export default PlaceService;
