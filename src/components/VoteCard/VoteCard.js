import React, { useState } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonRadioGroup, IonRadio, IonLabel, IonButton, IonItem, IonIcon} from '@ionic/react';
import { pin, trash, checkmarkOutline } from 'ionicons/icons';

import './index.css';

const VoteCard = ({vote}) => {

    const [postData, setPostData] = useState({
        question: "",
        choice: "",
        count: ""
    })
    const [selected, setSelected] = useState("");


    const increaseCount = (index, array) => {
        var newArray = array;
        var c = array[index] + 1;
        newArray.splice(index, 1, c);
        return newArray.join(";");

    }

    const choiceSelected = () => {
        var increaseCountIndex = vote.choice.split(";").indexOf(selected);
        var countArray = vote.count.split(";").map(Number);
        console.log(increaseCount(increaseCountIndex, countArray));
    }

    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>{vote.question}</IonCardTitle>
            </IonCardHeader>

            <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>
                {vote.choice.split(";").map((choices, index) => (
                    <IonItem key={index}>
                        <IonLabel>{choices}</IonLabel>
                        <IonRadio slot="start" value={choices} />
                    </IonItem>
                ))}
            </IonRadioGroup>

            <IonItem lines="none" className="cc-button">
                <IonButton slot="end" size="medium" onClick={choiceSelected}>
                    <IonIcon icon={checkmarkOutline} slot="start" />
                    <IonLabel>Vote</IonLabel>
                </IonButton>
            </IonItem>
        </IonCard>
    )
}

export default VoteCard;
