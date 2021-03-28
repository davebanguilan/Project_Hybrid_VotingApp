import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IonContent, IonPage, IonToast} from '@ionic/react';
import SignUpCard from '../../components/SignUpCard/SignUpCard';

import {signup} from '../../actions/auth';


const SignUp = ({setIsAuth}) => {
    const [showToast, setShowToast] = useState(false);
    const [showToastSuccess, setShowToastSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setIsLoading(true);
            await dispatch(signup(formData, history));
            setShowToastSuccess(true);
            setIsLoading(false);
            setIsAuth(true);
        } catch (error) {
            setIsLoading(false);
            setShowToast(true);
        }
    }   

    return (
        <IonPage className="cv-container">
            <IonContent >
                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message="Email Already Exists"
                    duration={2500}
                    color="danger"
                    position="bottom"
                />
                <SignUpCard formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} showToastSuccess={showToastSuccess} setShowToastSuccess={setShowToastSuccess} isLoading={isLoading}/>
            </IonContent>
        </IonPage>
    )
}

export default SignUp;
