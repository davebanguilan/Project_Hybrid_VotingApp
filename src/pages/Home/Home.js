import React, {useState} from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import SignUpCard from '../../components/SignUpCard/SignUpCard';

const Home = () => {
    
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    return (
        <IonPage className="cv-container">
            <IonContent >
                <SignUpCard formData={formData} setFormData={setFormData} />
            </IonContent>
        </IonPage>
    )
}

export default Home
