import { busOutline, homeOutline, mapOutline } from "ionicons/icons";

const List: React.FC = () => {
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

    return (
      <>
        <h1>List of Locations</h1>
      </>
    );
  };
  export default List;
  