import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import VoteCard from '../../components/VoteCard/VoteCard';
import {getVotes} from '../../actions/votes';


const Vote = () => {
    const dispatch = useDispatch();
    const votes = useSelector((state) => state.votes);

    useEffect(() => {
        dispatch(getVotes());
    }, []);

    console.log(votes);

    return (
        <IonPage className="cv-container">
            {/* <IonHeader>
                <IonToolbar> <IonTitle></IonTitle> </IonToolbar>
            </IonHeader> */}
            <IonContent >
                {votes.map((vote) => (
                    <VoteCard key={vote.id} vote={vote} />
                ))}
            </IonContent>
        </IonPage>
    )
}

export default Vote
