import { busOutline, homeOutline, listOutline } from "ionicons/icons";

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
        <h1>Insert Map here</h1>
      </>
    );
  };
  export default MapPage;
  