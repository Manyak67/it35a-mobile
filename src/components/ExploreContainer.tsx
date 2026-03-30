import './ExploreContainer.css';
import { IonButton } from '@ionic/react';
import Modal from '../components/Modal';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <strong>Ready to create an app?</strong>
      <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
  <IonButton>Click me</IonButton> 
  <Modal/>
    </div>
  );
};

export default ExploreContainer;
