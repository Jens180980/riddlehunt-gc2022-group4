import Cards from "../../Partials/Cards/Cards";
import Header from "../../Partials/Header/Header";

const Home: React.FC = () => {
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
