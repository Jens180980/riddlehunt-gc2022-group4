import { busOutline, homeOutline, mapOutline } from "ionicons/icons";
import { useEffect, useState } from "react";
import RoutesService from '../../../Services/routes.service';
import Cards from "../../Partials/Cards/Cards";


const List: React.FC = () => {
  const routesService = new RoutesService();
  const [places, setPlaces] = useState(null);

  const navListItems = [
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
      setPlaces(res);
    });
  }, []);

  return (
    <>
      <h1>List of Locations</h1>
      <Cards
        src="https://i.ibb.co/QdMYQxk/3d48a98a13dc.jpg"
        subtitle="Restaurant"
        title="places"
        description="testing"
      />
    </>
  );
};
export default List;
