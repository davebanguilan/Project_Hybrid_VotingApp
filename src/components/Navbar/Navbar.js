import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonMenuToggle, IonItem, IonLabel, IonIcon, IonToggle } from "@ionic/react";
import { personCircle, home, informationCircle, moon } from 'ionicons/icons';


const Navbar = () => {
    const toggleDarkModeHandler = () => document.body.classList.toggle('dark');
    return (
        <>
            <IonMenu side="start" contentId="main">
                <IonHeader>
                    <IonToolbar color="light">
                        <IonTitle>Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        <IonMenuToggle auto-hide="false">
                            <IonItem button routerLink={"/home"} routerDirection="none">
                            <IonLabel>Home</IonLabel>
                            <IonIcon icon={home} slot="start" />
                            </IonItem>
                        </IonMenuToggle>
                        <IonMenuToggle auto-hide="false">
                        <IonItem button routerLink={"/account"} routerDirection="none">
                            <IonLabel>Account</IonLabel>
                            <IonIcon icon={personCircle} slot="start" />
                            </IonItem>
                        </IonMenuToggle>

                        <IonMenuToggle auto-hide="false">
                            <IonItem button routerLink={"/about"} routerDirection="none">
                            <IonLabel>About</IonLabel>
                            <IonIcon icon={informationCircle} slot="start" />
                            </IonItem>
                        </IonMenuToggle>

                        {/* <IonMenuToggle auto-hide="false">
                            <IonItem button routerLink={"/create"} routerDirection="none">
                            <IonLabel>Create</IonLabel>
                            <IonIcon icon={addCircle} slot="start" />
                            </IonItem>
                        </IonMenuToggle>

                        <IonMenuToggle auto-hide="false">
                            <IonItem button routerLink={"/vote"} routerDirection="none">
                            <IonLabel>Vote</IonLabel>
                            <IonIcon icon={checkmarkCircle} slot="start" />
                            </IonItem>
                        </IonMenuToggle>

                        <IonMenuToggle auto-hide="false">
                            <IonItem button routerLink={"/myform"} routerDirection="none">
                            <IonLabel>Form</IonLabel>
                            <IonIcon icon={newspaper} slot="start" />
                            </IonItem>
                        </IonMenuToggle> */}
                        
                        <IonItem lines="none">
                            <IonIcon slot="start" icon={moon} />
                            <IonLabel>Dark Mode</IonLabel>
                            <IonToggle slot="end" name="darkMode" onIonChange={toggleDarkModeHandler} />
                        </IonItem>

                        </IonList>
                </IonContent>
            </IonMenu>
        </>
    )
}

export default Navbar
