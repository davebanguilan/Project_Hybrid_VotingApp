import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import VoteCard from '../../components/VoteCard/VoteCard';
import {getVotes, updateVote} from '../../actions/votes';



const Vote = () => {
    const [postData, setPostData] = useState({
        id: 0,
        question: "",
        choice: "",
        count: ""
    });
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const votes = useSelector((state) => state.votes);

    useEffect(() => {
        dispatch(getVotes());
    }, []);


    const handleSubmit = async () => {
        try {
            setLoading(true);
            await dispatch(updateVote(postData));
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <IonPage className="cv-container">
            {/* <IonHeader>
                <IonToolbar> <IonTitle></IonTitle> </IonToolbar>
            </IonHeader> */}
            <IonContent >
                {votes.map((vote) => (
                    <VoteCard key={vote.id} vote={vote} handleSubmit={handleSubmit} loading={loading} setPostData={setPostData}/>
                ))}
            </IonContent>
        </IonPage>
    )
}

export default Vote;
