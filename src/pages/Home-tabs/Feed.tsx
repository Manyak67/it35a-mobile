import { IonContent } from '@ionic/react';

const Feed: React.FC = () => {
    return (
        <IonContent fullscreen>
            <div style={{ padding: '16px' }}>
                <h2>Welcome to Feed</h2>
                <p>Latest updates and posts will appear here.</p>
            </div>
        </IonContent>
    );
}

export default Feed;
