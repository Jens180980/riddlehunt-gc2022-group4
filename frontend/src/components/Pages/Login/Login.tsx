import { IonButton, IonInput, IonItem, IonLabel, IonText } from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { User } from "../../../interfaces/User.interface";
import LoginService from "../../../Services/login.service";
import Header from "../../Partials/Header/Header";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginService = new LoginService();
  let history = useHistory();

  function navigateToRegister(e: any) {
    return history.push("/signup");
  }

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();

      let user: User = {
        email,
        password,
        name: "",
        profile_picture: "",
      };

      await loginService.login(user).then((res) => {
       
        if (res && res.data.token) {
          
          localStorage.setItem("token", res.data.token);
          return history.push("/home");
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header title="Riddlehunt 4.0" />
      <form onSubmit={handleSubmit} className="ion-padding">
        <IonItem>
          <IonLabel position="floating" color="medium">
            {" "}
            Email{" "}
          </IonLabel>
          <IonInput
            autofocus
            type="email"
            autocomplete="email"
            name="email"
            onIonChange={(e) => setEmail(e.detail.value!)}
            required
            minlength={3}
            maxlength={100}
          ></IonInput>
        </IonItem>
        {/*  <div className="validation-errors">
        <span *ngFor="let validation of validationMessages.email">
          <div
            className="alert"
            *ngIf="loginForm.get('email').hasError(validation.type) && loginForm.get('email').dirty"
          >
            {{validation.message}}
          </div>
        </span>
      </div>
 */}
        <IonItem>
          <IonLabel position="floating" color="medium">
            {" "}
            Contraseña{" "}
          </IonLabel>
          <IonInput
            onIonChange={(e) => setPassword(e.detail.value!)}
            type="password"
            name="password"
            required
            minlength={3}
            maxlength={50}
          ></IonInput>
        </IonItem>

        <IonButton
          className="ion-padding"
          type="submit"
          color="warning"
          expand="full"
          size="default"
          shape="round"
        >
          <IonText color="light" className="text-shadow">
            Iniciar sesión
          </IonText>
        </IonButton>

        <IonButton
          className="ion-padding"
          expand="full"
          size="default"
          color="light"
          fill="outline"
          shape="round"
          onClick={navigateToRegister}
        >
          <IonLabel color="medium">¿Eres nuevo? Regístrate!</IonLabel>
        </IonButton>
      </form>

      <IonItem lines="none" className="footer">
        <Link to={"#"}>Aviso Legal</Link>
      </IonItem>
    </>
  );
};
export default SignIn;
