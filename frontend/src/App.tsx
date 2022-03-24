// Ionic components import
import {
  IonApp,
  setupIonicReact,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from "@ionic/react";
import { useState, createContext, useEffect } from "react";

import axios from "axios";

// Pages import
import Navigation from "./components/Partials/Navigation/Navigation";
import Home from "./components/Pages/Home/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import PlaceService from "./Services/places.service";

setupIonicReact();
//interceptors
/* axios.interceptors.request.use((req)=>{
  let token:any = localStorage.getItem("token");
if(token.length>0){
  
  axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
  return req;
}
  return req;
})

axios.interceptors.response.use(()=>{

}) */
interface contextInterface {
  placesData: any;
  setPlacesData: any;
}
export const placesContext = createContext<any>({});

const App: React.FC = () => {
  const placeService = new PlaceService();
  const [placesData, setPlacesData] = useState();
  useEffect(() => {
    const getData = async () => {
      placeService.getPlaces().then((apiPlaces) => {
        setPlacesData(apiPlaces.data);
      });
    };
    getData();
  }, []);

  return (
    <IonApp>
      <placesContext.Provider value={placesData}>
        <Navigation />
      </placesContext.Provider>
    </IonApp>
  );
};

export default App;
