import { IonContent } from '@ionic/react';

const Favorites: React.FC = () => {
    return (
        <IonContent fullscreen>
            <div style={{ padding: '16px' }}>
                <h2>Your Favorites</h2>
                <p>Saved items will appear here.</p>
            </div>
        </IonContent>
    );
}

export default Favorites;
