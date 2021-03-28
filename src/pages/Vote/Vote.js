import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import VoteCard from '../../components/VoteCard/VoteCard';
import {getVotes, updateVote} from '../../actions/votes';
import { useHistory } from "react-router-dom";




const Vote = () => {
    const history = useHistory();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [postData, setPostData] = useState({
        id: 0,
        question: "",
        choice: "",
        count: "",
        voter: ""
    });
    const [loading, setLoading] = useState(false);
    const [edit, setEdit] = useState(false);
    const dispatch = useDispatch();
    const votes = useSelector((state) => state.votes);

    useEffect(() => {
        dispatch(getVotes());
    }, [edit]);


    const handleSubmit = async () => {
        try {
            setLoading(true);
            await dispatch(updateVote(postData));
            setLoading(false);
            history.push("/myform");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <IonPage className="cv-container">
            <IonContent >
                {votes.map((vote) => {
                    if(vote.voter !== null) return !vote.voter.includes(user.email) && <VoteCard key={vote.id} vote={vote} handleSubmit={handleSubmit} loading={loading} setPostData={setPostData} setEdit={setEdit} postData={postData}/>
                })}
            </IonContent>
        </IonPage>
    )
}

export default Vote;
