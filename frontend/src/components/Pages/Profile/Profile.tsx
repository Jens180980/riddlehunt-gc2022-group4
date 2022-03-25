import { leaf, locate, logOut, person, settings } from "ionicons/icons";
import React from "react";
import {
  IonList,
  IonItem,
  IonLabel,
  IonContent,
  IonAvatar,
  IonIcon,
  IonRefresher,
  IonRefresherContent,
} from "@ionic/react";
import "./Profile.css";
import Header from "../../Partials/Header/Header";

export const Profile: React.FC = () => {
  return (
    <>
      <IonContent className="profileContainer">
        <div id="ProfileCircle"></div>
        <section id="ProfileName">
          <img
            src="https://i.ibb.co/ZJvLSBD/logo1.png"
            alt="logo, temporary picture"
          />
          <h3>Username</h3>
        </section>

        <IonList id="ProfileList">
          <IonItem>
            <IonAvatar slot="start">
              <IonIcon icon={person} size="large"></IonIcon>
            </IonAvatar>
            <IonLabel>My Profile</IonLabel>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start">
              <IonIcon icon={locate} size="large"></IonIcon>
            </IonAvatar>
            <IonLabel>Location</IonLabel>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start">
              <IonIcon icon={leaf} size="large"></IonIcon>
            </IonAvatar>
            <IonLabel>My Places</IonLabel>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start">
              <IonIcon icon={settings} size="large"></IonIcon>
            </IonAvatar>
            <IonLabel>Settings</IonLabel>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start">
              <IonIcon icon={logOut} size="large"></IonIcon>
            </IonAvatar>
            <IonLabel>Log Out</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </>
  );
};
