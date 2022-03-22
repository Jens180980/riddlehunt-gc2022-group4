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
        <h1>Profile</h1>
      </>
    );
  };
  export default Profile;
  