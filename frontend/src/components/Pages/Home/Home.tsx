import Header from "../../Partials/Header/Header";
import { useContext } from "react";
import { placesContext } from "../../../App";
import { IonContent } from "@ionic/react";
import { Link } from "react-router-dom";
import Cards from "../../Partials/Cards/Cards";


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


import './Home.css'

const Home: React.FC = () => {
  const places = useContext(placesContext);
  console.log(places);

  return (
    <IonContent>
      <Header title="Riddlehunt 2022" />
      <div id="content">
        <Link to={"/list"}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="130"
                image="https://i.ibb.co/Y2wBLMn/72f8bf482741.jpg"
                alt="See all the sustainable locations"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  See all the sustainable locations
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        <Link to={"/routes"}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="130"
                image="https://i.ibb.co/Y2wBLMn/72f8bf482741.jpg"
                alt="Find your favorite route"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Find your favorite route
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </div>

    </IonContent>
  );
};
export default Home;
