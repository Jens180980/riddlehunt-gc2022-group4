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
import { login } from "../../../Services/login.service";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /*   const navigate = "navigate"(); */

  async function handleInput(e: { currentTarget: { name: any; value: any } }) {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  }

  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      formData.append("user[email]", email);
      formData.append("user[password]", password);

      await login(JSON.stringify(formData)).then((res) => {
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
    <IonContent>
      <div className="presentation-container">
        <div className="darken-filter">
          <figure>
            {/* <img src="../../../assets/icon/white-logo.png" alt="Nutripocket logo"> */}
          </figure>
          <h3 color="dark">Riddlehunt</h3>
        </div>
      </div>

      <div>
        <form onSubmit={handleSubmit} className="ion-padding">
          <IonItem>
            <IonLabel position="floating" color="medium">
              {" "}
              Email{" "}
            </IonLabel>
            <IonInput type="text" autocomplete="email" name="email"></IonInput>
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
            <IonInput type="password" name="password"></IonInput>
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
          >
            <IonLabel color="medium">¿Eres nuevo? Regístrate!</IonLabel>
          </IonButton>
        </form>
      </div>

      <IonItem lines="none" className="footer">
        <a href="">Aviso Legal</a>
      </IonItem>
    </IonContent>
  );
};
export default SignIn;
