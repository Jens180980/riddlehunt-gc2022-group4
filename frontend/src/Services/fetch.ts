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
import { User } from "../interfaces/User.interface";

class PlaceService {
  static PlaceService: PlaceService;

  static getCategoryService() {
    if (!this.PlaceService) this.PlaceService = new PlaceService();

    return this.PlaceService;
  }

  fetchPlace = async (): Promise<any> => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    return axios.get<any>("http://localhost:5000/place", {
      headers: headers,
    });
  };

  async register(user: User): Promise<any> {
    const headers = {
      "Content-Type": "application/json",
    };
    return axios.post<string>(
      REACT_APP_BACKEND_HOST + "/api/auth/sing-up",
      user,
      { headers: headers }
    );
  }
}
export default PlaceService;
