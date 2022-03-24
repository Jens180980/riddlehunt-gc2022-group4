import Cards from "../../Partials/Cards/Cards";
import Header from "../../Partials/Header/Header";
import { useContext } from "react";
import { placesContext } from "../../../App";

const Home: React.FC = () => {
  const places = useContext(placesContext);
  console.log(places);

  return (
    <>
      <Header title="Riddlehunt 4.0" />
      <Cards
        src="https://i.ibb.co/QdMYQxk/3d48a98a13dc.jpg"
        subtitle="Restaurant"
        title="places"
        description="testing"
      />
    </>
  );
};
export default Home;
