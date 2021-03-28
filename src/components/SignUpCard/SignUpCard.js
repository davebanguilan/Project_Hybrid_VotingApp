import React, {useState} from 'react';
import { IonInput, IonCard, IonItem, IonLabel, IonButton, IonToast, IonSpinner } from '@ionic/react';

const SignUpCard = ({formData, setFormData, handleSubmit, showToastSuccess , setShowToastSuccess, isLoading}) => {
    

    return (
        <IonCard>
            <IonToast
                isOpen={showToastSuccess}
                onDidDismiss={() => setShowToastSuccess(false)}
                message="User successfully created"
                duration={1500}
                color="success"
                position="bottom"
            />
            <form onSubmit={handleSubmit}>
                <IonItem >
                    <IonLabel position="fixed">Name: </IonLabel>
                    <IonInput name="nameInput" placeholder="Enter Name" value={formData.name} onIonChange={e => setFormData({ ...formData, name: e.target.value })}/>
                </IonItem>
                <IonItem>
                    <IonLabel position="fixed">Email</IonLabel>
                    <IonInput name="email" type="email" placeholder="Enter Email" value={formData.email} onIonChange={e => setFormData({ ...formData, email: e.target.value })}/>
                </IonItem>
                <IonItem >
                    <IonLabel position="fixed">Password</IonLabel>
                    <IonInput name="password" type="password" placeholder="Enter Password" value={formData.password} onIonChange={e => setFormData({ ...formData, password: e.target.value })}/>
                </IonItem> 
                <IonItem lines="none">
                    {isLoading ? (<IonSpinner slot="end" name="crescent" />) : (
                        <IonButton slot="end" size="medium" type="submit" color="primary">
                            <IonLabel>Sign Up</IonLabel>
                        </IonButton>
                    )}
                    
                </IonItem>
            </form>
                
        </IonCard>
    )
}

export default SignUpCard;
