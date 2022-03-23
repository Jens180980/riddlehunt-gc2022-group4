import { closeOutline } from "ionicons/icons";
import React from 'react';
import { IonList, IonItem, IonLabel, IonContent, IonAvatar, IonIcon } from '@ionic/react';


export const Profile: React.FC = () => {
  return (
    <>
      <IonContent>
        {/*-- List of Text Items --*/}
        <IonList>
          <IonItem>
            <IonAvatar slot="start">
              {<IonIcon icon="person"></IonIcon>}
            </IonAvatar>
            <IonLabel>My Profile</IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <img src="https://i.ibb.co/7WrTKnT/efa358df0d83.jpg" />
            </IonAvatar>
            <IonLabel>Location</IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <img src="https://i.ibb.co/7WrTKnT/efa358df0d83.jpg" />
            </IonAvatar>
            <IonLabel>My Places</IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <img src="https://i.ibb.co/7WrTKnT/efa358df0d83.jpg" />
            </IonAvatar>
            <IonLabel>Settings</IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <img src="https://i.ibb.co/7WrTKnT/efa358df0d83.jpg" />
            </IonAvatar>
            <IonLabel>Log Out</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </>
  );
};