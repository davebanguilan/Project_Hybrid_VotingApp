import React, {useState, useEffect} from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonButton, IonMenuToggle, IonItem, IonLabel, IonIcon, IonToggle } from "@ionic/react";
import { personCircle, logInOutline, personAddOutline, informationCircle, moon, logOutOutline } from 'ionicons/icons';
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import decode from "jwt-decode";


const Navbar = ({isAuth, setIsAuth}) => {
    const toggleDarkModeHandler = () => document.body.classList.toggle('dark');
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: "LOGOUT" });
        history.push("/signin");

        setUser(null);
    };

    useEffect(() => {
        if (user === null) {
            history.push("/signin");
            setIsAuth(false);
        } else{
            setIsAuth(true);
        }
        
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        
        setUser(JSON.parse(localStorage.getItem("profile")));
    }, []);

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
                        {
                            isAuth ? 
                            (
                                <>
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

                                    <IonItem type="button" onClick={logout}>
                                        <IonIcon slot="start" icon={logOutOutline} />
                                        <IonLabel>Logout</IonLabel>
                                    </IonItem>
                                </>
                            ) : 
                            (
                                <>
                                    <IonMenuToggle auto-hide="false">
                                        <IonItem button routerLink={"/sigin"} routerDirection="none">
                                        <IonLabel>Sign In</IonLabel>
                                        <IonIcon icon={logInOutline} slot="start" />
                                        </IonItem>
                                    </IonMenuToggle>

                                    <IonMenuToggle auto-hide="false">
                                        <IonItem button routerLink={"/signup"} routerDirection="none">
                                        <IonLabel>Sign Up</IonLabel>
                                        <IonIcon icon={personAddOutline} slot="start" />
                                        </IonItem>
                                    </IonMenuToggle>
                                </>
                            )
                        }   
                        
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
