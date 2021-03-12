import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import CreateCard from '../../components/CreateCard/CreateCard';
import {setVote} from '../../actions/votes';
import './index.css';

const CreateVote = () => {
    const dispatch = useDispatch();
    const [choices, setChoices] = useState([""]);
    const [showToast, setShowToast] = useState(false);
    const [postData, setPostData] = useState({
        question: "",
        choice: "",
        count: ""
      });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setVote({ ...postData }));
        reset();
        setChoices([""]);
        setShowToast(true);
    }

    const reset = () => {
        setPostData({
            question: "",
            choice: "",
            count: ""
        })
    }

    return (
        <IonPage className="cv-container">
            <IonHeader>
                <IonToolbar> <IonTitle>Create Vote</IonTitle> </IonToolbar>
            </IonHeader>
            <IonContent >
                <CreateCard handleSubmit={handleSubmit} postData={postData} setPostData={setPostData} choices={choices} 
                    setChoices={setChoices} showToast={showToast} setShowToast={setShowToast}
                />
            </IonContent>
        </IonPage>
    )
}

export default CreateVote;
