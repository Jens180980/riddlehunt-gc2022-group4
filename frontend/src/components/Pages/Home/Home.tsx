import Header from "../../Partials/Header/Header";
import { useContext } from "react";
import { placesContext } from "../../../App";
import { IonContent } from "@ionic/react";
import { Link } from "react-router-dom";
import List from "../List/List";
import Cards from "../../Partials/Cards/Cards";

const Home: React.FC = () => {
  const places = useContext(placesContext);
  console.log(places);

  return (
    <IonContent>
      <Header title="Riddlehunt 4.0" />
      <Link to={"/list"}>
        <Cards
          src="https://i.ibb.co/Y2wBLMn/72f8bf482741.jpg"
          title="See all the sustainable locations"
        />
      </Link>
      <Link to={"/routes"}>
        <Cards
          src="https://i.ibb.co/Y2wBLMn/72f8bf482741.jpg"
          title="Find your favorite route"
        />
      </Link>
      <List />
    </IonContent>
  );
};
export default Home;
