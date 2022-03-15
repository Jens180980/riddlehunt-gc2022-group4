// Ionic components import
import { IonApp, setupIonicReact } from "@ionic/react";

// Pages import
import Home from "./components/Pages/Home/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <Home />
  </IonApp>
);

export default App;
