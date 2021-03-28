import React from 'react';
import { Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar, IonIcon, IonTabButton, IonLabel } from '@ionic/react';
import { addCircle, checkmarkCircle, newspaper } from 'ionicons/icons';

import CreateVote from '../../pages/CreateVote/CreateVote';
import Vote from '../../pages/Vote/Vote';
import ListForm from '../../pages/ListForm/ListForm';

const Tabs = () => {
    return (
            <IonTabs>
                <IonRouterOutlet>
                    <Route path="/create" component={CreateVote} exact={true} />
                    <Route path="/vote" component={Vote} exact={true} />
                    <Route path="/myform" component={ListForm} exact={true} />
                </IonRouterOutlet>
                <IonTabBar slot="bottom">

                    <IonTabButton tab="create" href="/create">
                        <IonIcon icon={addCircle} />
                        <IonLabel>Create</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="vote" href="/vote">
                        <IonIcon icon={checkmarkCircle} />
                        <IonLabel>Vote</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="form" href="/myform">
                        <IonIcon icon={newspaper} />
                        <IonLabel>Form</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
    )
}

export default Tabs
