import { busOutline, mapOutline, personCircleOutline } from "ionicons/icons";

const Home: React.FC = () => {
  const navHomeItems = [
    {
        key: '0',
        tab: 'map',
        path: '/map',
        icon: mapOutline,
        label: 'Map'
    },
    {
        key: '3',
        tab: 'profile',
        path: '/profile',
        icon: personCircleOutline,
        label: 'Profile'
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
      <h1>Home Page</h1>
    </>
  );
};
export default Home;
