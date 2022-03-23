import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, IonRouterOutlet } from '@ionic/react';
import { busOutline, homeOutline, mapOutline, personCircleOutline, personOutline } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import MapPage from '../../Pages/Map/Map';
import Transport from '../../Pages/Transport/Transport';
import Home from '../../Pages/Home/Home';
import { Profile } from '../../Pages/Profile/Profile';
import List from '../../Pages/List/List';

export const Navigation: React.FC = () => {
    const navItems = [
        {
            key: '0',
            tab: 'map',
            path: '/map',
            icon: mapOutline,
            label: 'Map'
        },
        {
            key: '1',
            tab: 'home',
            path: '/home',
            icon: homeOutline,
            label: 'Home'
        },
        {
            key: '2',
            tab: 'profile',
            path: '/profile',
            icon: personOutline,
            label: 'Profile'
        }
    ]

    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/map">
                        <MapPage />
                    </Route>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/transport">
                        <Transport />
                    </Route>
                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                    <Route exact path="/list">
                        <List />
                    </Route>
                    <Route exact path="/login">
                        {/* login is coming */}
                    </Route>
                    <Route exact path="/signup">
                        {/* sign up is coming */}
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                </IonRouterOutlet>

                <IonTabBar slot="bottom">
                    {navItems.map((item, index) => {
                        console.log(item);
                        return (
                            <IonTabButton key={item.key} tab={item.tab} href={item.path}>
                                <IonIcon icon={item.icon} />
                                <IonLabel>{item.label}</IonLabel>
                            </IonTabButton>
                        )
                    })}
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    )
}


export default Navigation;