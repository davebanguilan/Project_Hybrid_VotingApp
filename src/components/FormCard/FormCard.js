import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonList, IonItem} from '@ionic/react';
import { Pie, Bar } from 'react-chartjs-2';

import './index.css';

const FormCard = ({vote, toggle}) => {
    
    const pieChartData = {
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

    const barChartData = {
        labels: vote.choice.split(";"),
        datasets: [
          {
            label: vote.question,
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: vote.count.split(";").map(Number),
            
          }
        ],
        };



    return (
        <IonCard>


            <IonCardHeader>
                <IonCardTitle>{vote.question}</IonCardTitle>
            </IonCardHeader>

            <IonList>
                <IonItem>
                    {toggle ?
                    <Bar data={barChartData} options={{ maintainAspectRatio: true, scales: { yAxes: [{ ticks: { beginAtZero: true } }] }}} /> : 
                    <Pie data={pieChartData} options={{ maintainAspectRatio: true}} /> }
                </IonItem>
            </IonList>
            
        </IonCard>
    )
}

export default FormCard;
