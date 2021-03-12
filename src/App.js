import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/react';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import Home from './pages/Home/Home';
import Account from './pages/Account/Account';
import About from './pages/About/About';
import CreateVote from './pages/CreateVote/CreateVote';
import Vote from './pages/Vote/Vote';
import ListForm from './pages/ListForm/ListForm';

import Navbar from './components/Navbar/Navbar';
import Tabs from './components/Tabs/Tabs';


const App = () => (
  <IonApp>
    <IonReactRouter>
      <Navbar />
      <IonHeader>
          <IonToolbar>
              <IonTitle>Voting App</IonTitle>
              <IonButtons slot="start">
                  <IonMenuButton />
              </IonButtons>
          </IonToolbar>
      </IonHeader>
      <IonContent >
        <IonRouterOutlet id="main">
          <Route path="/home" component={Home} exact={true} />
          <Route path="/account" component={Account} exact={true} />
          <Route path="/about" component={About} exact={true} />
          <Route path="/create" component={CreateVote} exact={true} />
          <Route path="/vote" component={Vote} exact={true} />
          <Route path="/myform" component={ListForm} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
      </IonContent>
      <Tabs />
    </IonReactRouter>
  </IonApp>
);

export default App;
