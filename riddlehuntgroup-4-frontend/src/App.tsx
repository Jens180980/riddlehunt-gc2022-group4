// Ionic components import
import { Redirect, Route } from 'react-router-dom';
import { IonApp, setupIonicReact, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from '@ionic/react-router';
import { busOutline, ellipse, homeOutline, mapOutline, personCircleOutline, square, triangle } from 'ionicons/icons';


// Pages import
import Home from "./components/Pages/Home/Home";
import { Navigation } from "./components/Partials/Navigation/Navigation";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <Navigation />
  </IonApp>
);

export default App;
