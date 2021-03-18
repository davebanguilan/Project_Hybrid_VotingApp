import React, { useState } from 'react';
import { IonItem, IonLabel, IonInput, IonButton, IonIcon, IonList, IonToast } from '@ionic/react';
import { addCircle, trash, checkmarkOutline } from 'ionicons/icons';

import './index.css';

const CreateCard = ({handleSubmit, postData, setPostData, choices, setChoices, showToast, setShowToast}) => {
    

    const handleInputChange = (e, index) => {
        const { value } = e.target;
        const list = [...choices];
        list[index] = value;
        setChoices(list);

        var choiceString = list.join(";");
        var stringC = "";

        for(var i=0; i< choices.length; i++){
            if(i === choices.length - 1){
                stringC += "0";
                break;
            } else {
                stringC += "0;";
            }
        }

        setPostData({
            ...postData,
            choice: choiceString,
            count: stringC
        });
         
    };

    const handleAddChoice = () => {
        setChoices([...choices, ""]);
    };

    const handleRemoveChoice = index => {
        const list = [...choices];
        list.splice(index, 1);
        setChoices(list);
    };

    return (
        <IonList>
            <IonToast
                isOpen={showToast}
                onDidDismiss={() => setShowToast(false)}
                message="Your form was created"
                duration={1500}
                color="success"
                position="bottom"
            />
            <form onSubmit={handleSubmit}>
            <IonItem lines="none">
                <IonButton slot="end" size="medium" type="submit" color="success">
                    <IonIcon icon={checkmarkOutline} slot="start" />
                    <IonLabel>Create</IonLabel>
                </IonButton>
            </IonItem>
            
            <IonItem >
                <IonLabel position="floating">Question</IonLabel>
                {/* <IonInput name="questionInput" value={question} onIonChange={e => handleInputChange(e)} /> */}
                <IonInput name="questionInput" value={postData.question} onIonChange={e => setPostData({ ...postData, question: e.target.value })} />
            </IonItem>
            {choices.map((x, i) => (
                <>
                <IonItem key={i}>
                    <IonLabel position="fixed">Choice:</IonLabel>
                    <IonInput name="choice" placeholder="Enter a choice" value={x} onIonChange={e => handleInputChange(e, i)} />
                    {choices.length !== 1 && (
                        <IonButton size="medium" color="danger" onClick={() => handleRemoveChoice(i)}>
                            <IonIcon icon={trash}/>
                        </IonButton>
                    )}
                </IonItem>

                {choices.length - 1 === i && (
                    <IonItem lines="none" className="cc-button">
                        <IonButton slot="end" size="medium" onClick={handleAddChoice}>
                            <IonIcon icon={addCircle} slot="start" />
                            <IonLabel>Add Choices</IonLabel>
                        </IonButton>
                    </IonItem>
                )}
                </>
            ))}
            </form>
            
        </IonList>
    )
}

export default CreateCard


