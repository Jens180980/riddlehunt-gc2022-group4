import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonImg,
} from "@ionic/react";

interface PropsInterface {
  src: string;
  subtitle: string;
  title: string;
  description: string;
}

const Cards: React.FC<PropsInterface> = (props) => {
  return (
    <IonCard>
      <IonImg src={require(`${props.src}`)} />
      <IonCardHeader>
        <IonCardSubtitle>{props.subtitle}</IonCardSubtitle>
        <IonCardTitle>{props.title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        
      </IonCardContent>
      <IonCardContent>{props.description}</IonCardContent>
    </IonCard>
  );
};
export default Cards;
