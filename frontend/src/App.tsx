// Ionic components import
import { IonApp, setupIonicReact, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from "@ionic/react";

// Pages import
import Navigation from "./components/Partials/Navigation/Navigation";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

setupIonicReact();

const App: React.FC = () => {
  return(
    <IonApp>
      <Navigation />
    </IonApp>
  );
}

export default App;
