import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from "@ionic/react"
import { Route, Redirect } from "react-router";
import { homeOutline, logInOutline, logOutOutline } from "ionicons/icons";
import Home from "./Home";
import Login from "./login";


const Menu: React.FC = () => {
    const path = [
        {name: 'Home', url:'/app/home', icon:homeOutline},
        {name: 'Login', url:'/app/login', icon:logInOutline}

    ];
    return (
        <IonPage>
            <IonSplitPane contentId="main">
            <IonMenu contentId="main">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>

                    {path.map((item, index) => (
                        <IonMenuToggle key={index}>
                            <IonItem routerLink={item.url} routerDirection="forward">
                                <IonIcon icon={item.icon}
                                    slot="start"></IonIcon>
                                    {item.name}
                            </IonItem>
                        </IonMenuToggle>
                    ))}
                    <IonButton routerLink="/" routerDirection="back" expand ="full">
                        <IonIcon icon={logOutOutline} slot="start"></IonIcon>
                        Logout
                    </IonButton>
                </IonContent>
                </IonMenu>
                <IonRouterOutlet id="main">
                    <Route exact path="/app/home" component={Home}> </Route>
                    <Route exact path="/app/login" component={Login}> </Route>
                    <Route exact path="/app">
                    <Redirect to="/app/home" /> 
                    </Route>
                </IonRouterOutlet>
            </IonSplitPane>
        </IonPage>

    );
};



export default Menu;