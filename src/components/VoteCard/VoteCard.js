import React, { useState, useEffect } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonRadioGroup, IonRadio, IonLabel, IonButton, IonItem, IonIcon, IonSpinner} from '@ionic/react';
import { createOutline, trash, checkmarkOutline } from 'ionicons/icons';

import './index.css';

const VoteCard = ({vote, handleSubmit, setPostData, loading}) => {
    const [selected, setSelected] = useState("");

    useEffect(() => {
        choiceSelected();
    }, [selected]);
    

    const choiceSelected = () => {
        var increaseCountIndex = vote.choice.split(";").indexOf(selected);
        var countArray = vote.count.split(";").map(Number);
        var newArray = countArray;
        var c = countArray[increaseCountIndex] + 1;
        newArray.splice(increaseCountIndex, 1, c);
        setPostData({...vote, count: newArray.join(";")});
    }


    const editForm = () => {};
    const deleteForm = () => {};

    return (
        <IonCard>
            <IonItem lines="none">
                <IonButton slot="end" size="small" color="secondary" onClick={editForm}>
                    <IonIcon icon={createOutline} />
                </IonButton>
                <IonButton slot="end" size="small" color="danger" onClick={deleteForm}>
                    <IonIcon icon={trash} />
                </IonButton>
            </IonItem>

            <IonCardHeader>
                <IonCardTitle>{vote.question}</IonCardTitle>
            </IonCardHeader>

            <IonRadioGroup value={selected} onIonChange={e => {setSelected(e.detail.value)}}>
                {vote.choice.split(";").map((choices, index) => (
                    <IonItem key={index}>
                        <IonLabel>{choices}</IonLabel>
                        <IonRadio slot="start" value={choices} />
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
    )
}

export default VoteCard;
