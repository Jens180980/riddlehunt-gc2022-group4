import { busOutline, homeOutline, listOutline } from "ionicons/icons";
import Map from "../../Partials/Map/Map";
import Header from "../../Partials/Header/Header";

const MapPage: React.FC = () => {
    const navMapItems = [
        {
            key: '4',
            tab: 'list',
            path: '/list',
            icon: listOutline,
            label: 'List'
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

    return (
      <>
        <Header title={"Hola"}/>
        <Map lat={0} long={0} />
      </>
    );
  };
  export default MapPage;
  