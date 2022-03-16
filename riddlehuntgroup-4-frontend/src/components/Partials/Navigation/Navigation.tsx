import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, IonRouterOutlet } from '@ionic/react';
import { busOutline, mapOutline, personCircleOutline } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';


export const Navigation: React.FC = () => {
    const navItems = [
        {
            tab: 'map',
            path: '/map',
            icon: mapOutline,
            label: 'Map'
        },
        {
            tab: 'profile',
            path: '/profile',
            icon: personCircleOutline,
            label: 'Profile'
        },
        {
            tab: 'transport',
            path: '/transport',
            icon: busOutline,
            label: 'Transport'
        }
    ]

    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/map">
                        {/* map is coming */}
                    </Route>
                    <Route exact path="/home">
                        {/* profile is coming */}
                    </Route>
                    <Route exact path="/transport">
                        {/* transport is coming */}
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                </IonRouterOutlet>

                <IonTabBar slot="bottom">
                    {navItems.map((item, index) => {
                        console.log(item);
                        <IonTabButton tab={item.tab} href={item.path}>
                            <IonIcon icon={item.icon} />
                            <IonLabel>{item.label}</IonLabel>
                        </IonTabButton>
                    })}
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    )
}