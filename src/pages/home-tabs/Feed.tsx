import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Feed: React.FC = () => {
  const games = [
    { name: 'Genshin Impact' },
    { name: 'Honkai Impact 3rd' },
    { name: 'Honkai Star Rail' },
    { name: 'Zenless Zone Zero' },
    { name: 'Tears of Themis' },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Feed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList inset={true}>
          {games.map((game, index) => (
            <IonCard key={index}>
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
              <IonCardHeader>
                <IonCardTitle>{game.name}</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
              <IonLabel>

                <IonButton fill="clear" slot="end">Like</IonButton>
                <IonButton fill="clear" slot="end">Comment</IonButton>
                <IonButton fill="clear" slot="end">Share</IonButton>

              </IonLabel>
            </IonCard>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Feed;