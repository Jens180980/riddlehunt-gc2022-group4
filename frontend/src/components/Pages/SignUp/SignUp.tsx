import {
  IonButton,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonText,
} from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router";
import { User } from "../../../interfaces/User.interface";
import LoginService from "../../../Services/login.service";
import Header from "../../Partials/Header/Header";

const SignUp: React.FC = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const loginService = new LoginService();
  let history = useHistory();

  /*   const navigate = "navigate"(); */

  async function handleInput(e: { currentTarget: { name: any; value: any } }) {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  }

  function navigateToLogin(e: any) {
    return history.push("/login");
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

      await loginService.register(user).then((res) => {
        console.log(res);
        if (res) {
          localStorage.setItem("token", res);
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
            Nombre{" "}
          </IonLabel>
          <IonInput
            type="text"
            autocomplete="email"
            name="email"
            onIonChange={(e) => setEmail(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating" color="medium">
            {" "}
            Email{" "}
          </IonLabel>
          <IonInput
            type="text"
            autocomplete="email"
            name="email"
            onIonChange={(e) => setEmail(e.detail.value!)}
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
            value={password}
          ></IonInput>
        </IonItem>

        <IonButton
          className="ion-padding"
          type="submit"
          color="warning"
          expand="full"
          size="small"
          shape="round"
        >
          <IonText color="light" className="text-shadow">
            Registrarme
          </IonText>
        </IonButton>

        <IonButton
          className="ion-padding"
          expand="full"
          size="small"
          color="light"
          fill="outline"
          shape="round"
          onClick={navigateToLogin}
        >
          <IonLabel color="medium">¿Ya tienes una cuenta? Inicia sesión!</IonLabel>
        </IonButton>
      </form>

      <IonItem lines="none" className="footer">
        <a href="">Aviso Legal</a>
      </IonItem>
    </>
  );
};
export default SignUp;
