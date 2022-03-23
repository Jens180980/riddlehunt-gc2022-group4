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
import Fetch from "./Services/fetch";

// Pages import
import Navigation from "./components/Partials/Navigation/Navigation";
import Home from "./components/Pages/Home/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

setupIonicReact();

export const placesContext = createContext("");

const App: React.FC = () => {
  const [placesData, setPlacesData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const apiPlaces = await Fetch(
        "https://the-great-riddle-hunt.herokuapp.com/place"
      );
      setPlacesData(apiPlaces);
    };
  }, [setPlacesData]);

  console.log(placesData);

  return (
    <IonApp>
      <placesContext.Provider value={placesData}>
        <Navigation />
      </placesContext.Provider>
    </IonApp>
  );
};

export default App;
