import React, { useState, useEffect } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonList, IonRadio, IonLabel, IonButton, IonItem, IonIcon, IonSpinner} from '@ionic/react';
import { Doughnut } from 'react-chartjs-2';

import './index.css';

const FormCard = ({vote}) => {
    
    
    const doughnutChartData = {
        labels: vote.choice.split(";"),
        datasets: [
          {
            label: vote.question,
            backgroundColor: ['#36a2eb', 'rgba(255,99,132,0.2)'],
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: vote.count.split(";").map(Number),
          }
        ]
    };

    return (
        <IonCard>


            <IonCardHeader>
                <IonCardTitle>{vote.question}</IonCardTitle>
            </IonCardHeader>

            <IonList>
                <IonItem>
                    <Doughnut data={doughnutChartData} options={{ maintainAspectRatio: true}}   />
                </IonItem>
            </IonList>
            
        </IonCard>
    )
}

export default FormCard;
