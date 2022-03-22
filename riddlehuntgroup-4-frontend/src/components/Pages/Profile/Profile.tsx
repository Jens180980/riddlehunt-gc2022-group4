import { IonAvatar, IonIcon, IonList } from "@ionic/react";
import { closeOutline } from "ionicons/icons";

const Profile: React.FC = () => {
  const navProfileItems = [
    {
        key: '5',
        tab: 'home',
        path: '/home',
        icon: closeOutline,
        label: 'Cancel'
    }
]

    return (
      <>
        <IonList>
          <IonAvatar>
            <IonIcon icon="personCircleOutline"></IonIcon>
          </IonAvatar>
        </IonList>
      </>
    );
  };
  export default Profile;
  