import Header from "../../Partials/Header/Header";
import { useContext } from "react";
import { placesContext } from "../../../App";
import List from "../List/List";

const Home: React.FC = () => {
  const places = useContext(placesContext);
  console.log(places);

  return (
    <>
      <Header title="Riddlehunt 4.0" />
      <List />
    </>
  );
};
export default Home;
