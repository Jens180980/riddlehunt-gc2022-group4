// Ionic components import
import { Redirect, Route } from 'react-router-dom';
import { IonApp, setupIonicReact, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from '@ionic/react-router';
import { busOutline, closeOutline, homeOutline, listOutline, mapOutline, personCircleOutline } from 'ionicons/icons';

// Pages import
import Home from "./components/Pages/Home/Home";
import Navigation from "./components/Partials/Navigation/Navigation";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import Profile from './components/Pages/Profile/Profile';
import List from './components/Pages/List/List';
import MapPage from './components/Pages/Map/Map';
import Transport from './components/Pages/Transport/Transport';

setupIonicReact();

const App: React.FC = () => {
  return(
    <IonApp>
      <Navigation />
    </IonApp>
  );
}

export default App;
