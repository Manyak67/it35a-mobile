import { IonContent, IonHeader, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router-dom";
import { searchOutline, newspaperOutline, heartOutline } from "ionicons/icons";
import Feed from "./Home-tabs/Feed";
import Search from "./Home-tabs/Search";
import Favorites from "./Home-tabs/Favorites";

const Home: React.FC = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Feed" href="/app/home/feed">
            <IonIcon icon={newspaperOutline} />
            <IonLabel>Feed</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Search" href="/app/home/search">
            <IonIcon icon={searchOutline} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Favorites" href="/app/home/favorites">
            <IonIcon icon={heartOutline} />
            <IonLabel>Favorites</IonLabel>
          </IonTabButton>
        </IonTabBar>
        <IonRouterOutlet>
          <Route exact path="/app/home/feed" component={Feed} />
          <Route exact path="/app/home/search" component={Search} />
          <Route exact path="/app/home/favorites" component={Favorites} />
          <Route exact path="/app/home">
            <Redirect to="/app/home/feed" />
          </Route>
        </IonRouterOutlet>
      </IonTabs>
    </IonReactRouter>
  );
};

export default Home;
