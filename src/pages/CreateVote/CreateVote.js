import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';


const CreateVote = () => {
    return (
        <IonPage>
            <IonContent>
                <form className="ion-padding">
                    <IonItem>
                        <IonLabel position="floating">Username</IonLabel>
                        <IonInput />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Password</IonLabel>
                        <IonInput type="password" />
                    </IonItem>
                    <IonButton className="ion-margin-top" type="submit" expand="block">
                        Login
                    </IonButton>
                </form>
            </IonContent>
        </IonPage>
    )
}

export default CreateVote
