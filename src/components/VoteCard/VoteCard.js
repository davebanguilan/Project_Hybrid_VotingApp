import React, { useState, useEffect } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonRadioGroup, IonRadio, IonLabel, IonButton, IonItem, IonIcon, IonSpinner, IonModal, IonInput, IonToast } from '@ionic/react';
import { createOutline, trash, checkmarkOutline } from 'ionicons/icons';
import { useDispatch } from 'react-redux'; 
import {updateVote, deleteVote} from '../../actions/votes';
import './index.css';

const VoteCard = ({vote, handleSubmit, postData, setPostData, loading, setEdit}) => {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState("");
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [showToast, setShowToast] = useState(false);
    const [choices, setChoices] =  useState(vote.choice.split(";"));
    const [editData, setEditData] = useState({
        id: vote.id,
        question: vote.question,
        choice: vote.choice,
        count: vote.count,
        creator: user.email,
        voter: ""
    })
    

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        choiceSelected();
    }, [selected]);

    const choiceSelected = () => {
        if(vote.voter === "" || vote.voter === null) { 
            var userVoter = [];
            userVoter.push(user.email);
        } else {
            userVoter = postData.voter.split(';');
            userVoter.push(user.email); 
        }
        

        var increaseCountIndex = vote.choice.split(";").indexOf(selected);
        var countArray = vote.count.split(";").map(Number);
        var newArray = countArray;
        var c = countArray[increaseCountIndex] + 1;
        newArray.splice(increaseCountIndex, 1, c);

        setPostData({...vote, count: newArray.join(";"), voter: userVoter.join(';')});
    }

    const editForm = () => {
        setShowModal(true);
    };
    const deleteForm = async () => {
        await dispatch(deleteVote(vote));
    };

    

    const handleInputChange = (e, index) => {
        const { value } = e.target;
        const list = [...choices];
        list[index] = value;
        setChoices(list);

        var choiceString = list.join(";");

        setEditData({
            ...editData,
            choice: choiceString,
        });
         
    };

    const submitEditForm = async () => {
        setEdit(false);
        await dispatch(updateVote(editData));
        setEdit(true);
        setShowToast(true);
        setShowModal(false);
    };

    return (
        <>
        <IonToast
                isOpen={showToast}
                onDidDismiss={() => setShowToast(false)}
                message="Form Edited Succesfully"
                duration={1500}
                color="success"
                position="bottom"
            />
        <IonCard>
            {user.email === vote.creator && (
                <IonItem lines="none">
                <IonButton slot="end" size="small" color="secondary" onClick={editForm}>
                    <IonIcon icon={createOutline} />
                </IonButton>
                <IonButton slot="end" size="small" color="danger" onClick={deleteForm}>
                    <IonIcon icon={trash} />
                </IonButton>
                </IonItem>
            )}

            <IonCardHeader>
                <IonCardTitle>{vote.question}</IonCardTitle>
            </IonCardHeader>

            <IonRadioGroup value={selected} onIonChange={e => {setSelected(e.detail.value)}}>
                {vote.choice.split(";").map((ch, index) => (
                    <IonItem key={index}>
                        <IonLabel>{ch}</IonLabel>
                        <IonRadio slot="start" value={ch} />
                    </IonItem>
                ))}
            </IonRadioGroup>

            <IonItem lines="none" className="cc-button">
                {loading ? (
                    <IonSpinner name="crescent" slot="end"/>
                ): (
                    <IonButton slot="end" size="medium" onClick={handleSubmit}>
                        <IonIcon icon={checkmarkOutline} slot="start" />
                        <IonLabel>Vote</IonLabel>
                    </IonButton>
                ) }
            </IonItem>
        </IonCard>
        <IonModal isOpen={showModal} swipeToClose={true} onDidDismiss={() => setShowModal(false)}>
            <IonCard>
            <IonItem >
                        <IonLabel position="fixed">Question:</IonLabel>
                        <IonInput name="question" value={editData.question} onIonChange={e => setEditData({ ...editData, question: e.target.value })} />
                    </IonItem>
                    {choices.map((x, index) => (
                        <IonItem key={index}>
                            <IonLabel position="fixed">Choices:</IonLabel>
                            <IonInput name="choice" value={x} placeholder="Enter a choice" onIonChange={e => handleInputChange(e, index)} />
                        </IonItem>
                    ))}

                <IonItem>
                    <IonButton slot="end" size="default" color="primary" onClick={submitEditForm}>Save</IonButton>
                </IonItem>
            </IonCard>
                <IonButton color="danger" onClick={() => setShowModal(false)}>Cancel</IonButton>
        </IonModal>
        </>
    )
}

export default VoteCard;
