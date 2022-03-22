import { IonApp, IonImg } from "@ionic/react";

const logoPath = "https://i.ibb.co/ZJvLSBD/logo1.png";

const Header: React.FC = (props) => (
  <>
    <IonImg src={logoPath} />
    <h2>Header</h2>
  </>
);

export default Header;
