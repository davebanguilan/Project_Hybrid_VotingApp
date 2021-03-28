import React, {useState} from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonContent, IonLabel, IonButton, IonItem, IonIcon, IonCardContent, IonModal, IonInput, IonToast, IonPage } from '@ionic/react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { eyeOutline, eyeOffOutline } from 'ionicons/icons';


const Account = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [isShowPassword, setIsShowPassword] = useState(false);
    
    const logout = () => {
        dispatch({ type: "LOGOUT" });
        history.push("/auth");

        setUser(null);
    };

    const togglePasswordVisibility = () => setIsShowPassword((prevState) => !prevState);

    return (
        <IonPage>
            <IonContent>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Account</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                        <IonItem>
                            <IonLabel>Name:</IonLabel>
                            <IonInput value={user && user.name}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Email:</IonLabel>
                            <IonInput value={user && user.email}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Password:</IonLabel>
                            <IonInput type={isShowPassword ? "text" : "password"} value={ user && user.password}></IonInput>
                            <IonButton slot="end" onClick={togglePasswordVisibility}>
                                <IonIcon slot="icon-only" icon={isShowPassword ? eyeOffOutline : eyeOutline} />
                            </IonButton>
                        </IonItem>
                        
                </IonCardContent>
                
            </IonCard>
            
            </IonContent>
        </IonPage>

    )
}

export default Account
