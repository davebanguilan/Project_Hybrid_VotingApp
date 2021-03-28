import React, {useState} from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonContent, IonLabel, IonButton, IonItem, IonIcon, IonCardContent, IonModal, IonInput, IonToast, IonPage } from '@ionic/react';


const About = () => {

    return (
        <IonPage>
            <IonContent>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>About Us</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                        This is a voting mobile app created by:
                        Dave Emilson S. Banguilan, John Elli Cabuhat, Ernesto Paquibol, and Christian Joseph Samilin.
                </IonCardContent>
                
            </IonCard>
            
            </IonContent>
        </IonPage>
    )
}

export default About
