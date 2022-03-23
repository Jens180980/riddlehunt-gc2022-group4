// Ionic components import
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  setupIonicReact,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonBadge,
  IonRouterOutlet,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  busOutline,
  closeOutline,
  ellipse,
  homeOutline,
  listOutline,
  mapOutline,
  personCircleOutline,
  square,
  triangle,
} from "ionicons/icons";

// Pages import
import Home from "./components/Pages/Home/Home";
import Navigation from "./components/Partials/Navigation/Navigation";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Theme variables */
import "./theme/variables.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import Profile from "./components/Pages/Profile/Profile";
import List from "./components/Pages/List/List";
import MapPage from "./components/Pages/Map/Map";
import Transport from "./components/Pages/Transport/Transport";

setupIonicReact();

const App: React.FC = () => {
  const currentUrl = window.location.pathname;

  const Routes = [
    {
      key: "0",
      tab: "map",
      path: "/map",
      icon: mapOutline,
      label: "Map",
    },
    {
      key: "1",
      tab: "home",
      path: "/home",
      icon: homeOutline,
      label: "Home",
    },
    {
      key: "2",
      tab: "transport",
      path: "/transport",
      icon: busOutline,
      label: "Transport",
    },
    {
      key: "3",
      tab: "profile",
      path: "/profile",
      icon: personCircleOutline,
      label: "Profile",
    },
    {
      key: "4",
      tab: "list",
      path: "/list",
      icon: listOutline,
      label: "List",
    },
    {
      key: "5",
      tab: "home",
      path: "/home",
      icon: closeOutline,
      label: "Back",
    },
  ];

  let buttonToDisplay = [];

  switch (currentUrl) {
    case "/map":
      buttonToDisplay.push(
        {
          key: "4",
          tab: "list",
          path: "/list",
          icon: listOutline,
          label: "List",
        },
        {
          key: "1",
          tab: "home",
          path: "/home",
          icon: homeOutline,
          label: "Home",
        },
        {
          key: "2",
          tab: "transport",
          path: "/transport",
          icon: busOutline,
          label: "Transport",
        }
      );
      break;
    case "/home":
      buttonToDisplay.push(
        {
          key: "0",
          tab: "map",
          path: "/map",
          icon: mapOutline,
          label: "Map",
        },
        {
          key: "3",
          tab: "profile",
          path: "/profile",
          icon: personCircleOutline,
          label: "Profile",
        },
        {
          key: "2",
          tab: "transport",
          path: "/transport",
          icon: busOutline,
          label: "Transport",
        }
      );
      break;
    case "/profile":
      buttonToDisplay.push({
        key: "5",
        tab: "home",
        path: "/home",
        icon: closeOutline,
        label: "Cancel",
      });
      break;
    case "/list":
      buttonToDisplay.push(
        {
          key: "0",
          tab: "map",
          path: "/map",
          icon: mapOutline,
          label: "Map",
        },
        {
          key: "1",
          tab: "home",
          path: "/home",
          icon: homeOutline,
          label: "Home",
        },
        {
          key: "2",
          tab: "transport",
          path: "/transport",
          icon: busOutline,
          label: "Transport",
        }
      );
      break;
    case "/transport":
      buttonToDisplay.push(
        {
          key: "0",
          tab: "map",
          path: "/map",
          icon: mapOutline,
          label: "Map",
        },
        {
          key: "1",
          tab: "home",
          path: "/home",
          icon: homeOutline,
          label: "Home",
        },
        {
          key: "4",
          tab: "list",
          path: "/list",
          icon: listOutline,
          label: "List",
        }
      );
  }

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/map">
              <MapPage />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/transport">
              <Transport />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/list">
              <List />
            </Route>
            <Route exact path="/login">
              {/* Login is coming */}
            </Route>
            <Route exact path="/signup">
              {/* Sign up is coming */}
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            {buttonToDisplay.map((item, index) => {
              //console.log(item);
              return (
                <IonTabButton key={item.key} tab={item.tab} href={item.path}>
                  <IonIcon icon={item.icon} />
                  <IonLabel>{item.label}</IonLabel>
                </IonTabButton>
              );
            })}
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
