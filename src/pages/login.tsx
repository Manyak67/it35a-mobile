import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from "@ionic/react"
import { Route, Redirect } from "react-router";
import Home from "./Home";
import template from "./Template";

const Login: React.FC = () => {
    const navigation = useIonRouter();

    const dologin = () => {
        navigation.push('/app', 'forward', 'replace');

    ];
     return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonButton expand="full" onClick={() => dologin()}>
                    Login
                </IonButton>


            </IonContent>
        </IonPage>
    );

};



export default template;