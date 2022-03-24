import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonIcon,
} from "@ionic/react";

interface PropsInterface {
  src: string;
  subtitle?: string;
  title: string;
  description?: string;
  icon?: string;
}

const Cards: React.FC<PropsInterface> = (props) => {
  return (
    <IonCard>
      <IonImg src={props.src} />
      <IonCardHeader>
        <IonCardSubtitle>{props.subtitle}</IonCardSubtitle>
        <IonCardTitle>{props.title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonIcon icon={props.icon} />
      </IonCardContent>
      <IonCardContent>{props.description}</IonCardContent>
    </IonCard>
  );
};
export default Cards;
