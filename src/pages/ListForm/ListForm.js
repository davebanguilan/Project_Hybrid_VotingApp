import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { IonContent, IonPage, IonToggle, IonLabel, IonItem, IonIcon } from '@ionic/react';
import FormCard from '../../components/FormCard/FormCard';
import {getVotes} from '../../actions/votes';
import { barChartOutline, keyOutline, pieChartOutline } from 'ionicons/icons';

const ListForm = () => {

    const dispatch = useDispatch();
    const votes = useSelector((state) => state.votes);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        dispatch(getVotes());
    }, [toggle]);

    const toggleChart = () => setToggle((prevValue) => !prevValue);

    return (
        <IonPage className="cv-container">
            {/* <IonHeader>
                <IonToolbar> <IonTitle></IonTitle> </IonToolbar>
            </IonHeader> */}
            <IonContent >
            <IonItem lines="none">
                    <IonIcon slot="start" icon={pieChartOutline} />
                    <IonLabel>Pie Chart</IonLabel>

                    <IonToggle name="chartToggle" onIonChange={toggleChart} />

                    <IonIcon slot="end" icon={barChartOutline} />
                    <IonLabel>Bar Graph</IonLabel>
                </IonItem>
                {votes.map((vote) => (
                    <FormCard key={vote.id} vote={vote} toggle={toggle}/>
                ))}
            </IonContent>
        </IonPage>
    )
}

export default ListForm
