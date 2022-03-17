import { listOutline, mapOutline, homeOutline } from "ionicons/icons";

const Transport: React.FC = () => {
  const navTransportItems = [
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
        key: '4',
        tab: 'list',
        path: '/list',
        icon: listOutline,
        label: 'List'
    }
]

    return (
      <>
        <h1>Under construction</h1>
      </>
    );
  };
  export default Transport;
  