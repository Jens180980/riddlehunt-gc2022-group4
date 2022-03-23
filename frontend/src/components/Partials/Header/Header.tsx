import { IonApp, IonImg } from "@ionic/react";
import "./header.css";

// const logoPath = "https://i.ibb.co/ZJvLSBD/logo1.png";

interface PropsInterface {
  title: string;
}

const Header: React.FC<PropsInterface> = (props) => (
  <div>
    {/* <IonImg className="logo" src={logoPath} /> */}
    <h2>{props.title}</h2>
  </div>
);

export default Header;
