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
import { User } from "../../../interfaces/User.interface";
import { login, register } from "../../../Services/login.service";
import Header from "../../Partials/Header/Header";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  /*   const navigate = "navigate"(); */

  async function handleInput(e: { currentTarget: { name: any; value: any } }) {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  }

  function navigateToRegister(e:any) {
    return window.location.href="/register"
  }

  const handleSubmit = async (e:any) => {
    try {
      e.preventDefault();
      const formData = new FormData();

      
      let user:User={
        email,
        password,
        name: ""
      };
      
      await register(user).then((res) => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          return (window.location.href = "/home");
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
          <IonInput   onIonChange={(e) => setPassword(e.detail.value!)} type="password" name="password" value={password}></IonInput>
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
            Iniciar sesión
          </IonText>
        </IonButton>

        <IonButton
          className="ion-padding"
          expand="full"
          size="small"
          color="light"
          fill="outline"
          shape="round"
         
          onClick={navigateToRegister}
        >
          <IonLabel color="medium">¿Eres nuevo? Regístrate!</IonLabel>
        </IonButton>
      </form>

      <IonItem lines="none" className="footer">
        <a href="">Aviso Legal</a>
      </IonItem>
    </>
  );
};
export default SignUp;
