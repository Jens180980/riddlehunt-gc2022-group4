import { busOutline, homeOutline } from "ionicons/icons";

const Description: React.FC = () => {
  const navDescriptionItems = [
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
        <h1>Description Page</h1>
      </>
    );
  };
  export default Description;
  