import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import FormCard from '../../components/FormCard/FormCard';
import {getVotes} from '../../actions/votes';



const ListForm = () => {

    const dispatch = useDispatch();
    const votes = useSelector((state) => state.votes);

    useEffect(() => {
        dispatch(getVotes());
    }, []);

    return (
        <IonPage className="cv-container">
            {/* <IonHeader>
                <IonToolbar> <IonTitle></IonTitle> </IonToolbar>
            </IonHeader> */}
            <IonContent >
                {votes.map((vote) => (
                    <FormCard vote={vote} />
                ))}
            </IonContent>
        </IonPage>
    )
}

export default ListForm
