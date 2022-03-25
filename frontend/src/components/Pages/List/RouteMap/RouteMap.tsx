import { IonContent } from "@ionic/react";
import { busOutline, homeOutline, mapOutline, playCircleSharp } from "ionicons/icons";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Route } from "../../../../interfaces/Route.interface";
import PlacesService from '../../../../Services/places.service';
import { Place } from "../../../../interfaces/Place.interface"
import RoutesService from "../../../../Services/routes.service";
import Map from "../../../Partials/Map/Map";



const RouteMap: React.FC = () => {
  const routesService = new RoutesService();
  const [route, setRoute] = useState<Place>();
  const id = useParams<any>();
  console.log(id, "params")

  /*    const navListItems = [
       {
        key: '0',
        tab: 'map',
        path: '/map',
        icon: mapOutline,
        label: 'Map'
      },
      {
        key: '1',
        tab: 'home',
        path: '/home',
         icon: homeOutline,
         label: 'Home'
       },
       {
         key: '2',
         tab: 'transport',
         path: '/transport',
         icon: busOutline,
         label: 'Transport'
       }
     ]

    
  
    useEffect(() => {
      routesService.getRoutes().then((res) => {
        console.log(res.data)
        setRoute(res.data);
      });
    }, []); 

    onClick:
*/
  return (
    <IonContent>
      <Map id={parseInt(id.id)} />

      {/*  <h1>List of Routes</h1>
      {routes.length > 0 ? (
        routes.map((p: Route) => {
          return (<Cards
            src={p.places.length > 0 ? p.places[p.places.length - 1].image : ""}
            subtitle={`Distance: ${p.distance_in_km} KM`}
            title={p.name}
          />)
        })
      ) : null} */}
    </IonContent>
  );
};
export default RouteMap;
