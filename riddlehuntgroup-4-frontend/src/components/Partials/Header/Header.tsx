import { IonApp, IonImg } from "@ionic/react";

const logoPath = "../../../Assets/Img/logo1.svg";

const Header: React.FC = (props) => (
  <>
    <IonImg src={logoPath} />
    <h2>Header</h2>
  </>
);

export default Header;
