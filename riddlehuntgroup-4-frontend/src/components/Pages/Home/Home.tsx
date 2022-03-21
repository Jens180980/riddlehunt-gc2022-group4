import { busOutline, mapOutline, personCircleOutline } from "ionicons/icons";
import Cards from "../../Partials/Cards/Cards";
import Header from "../../Partials/Header/Header";

const Home: React.FC = () => {
  const navHomeItems = [
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
    },
  ];

  return (
    <>
      <Header />
      <Cards
        src="./testpic.jpg"
        subtitle="Restaurant"
        title="BioLoco"
        description="100% vegan food, and you can even bring your pet"
      />
    </>
  );
};
export default Home; 
