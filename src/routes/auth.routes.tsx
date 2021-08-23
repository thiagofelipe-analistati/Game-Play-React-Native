import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Signin } from '../screens/Signin';
import { AppointmentDetails } from '../screens/AppointmentDetails';
import { AppointmentCreate } from '../screens/AppointmentCreate';
import { theme } from '../global/styles/them';
import { Guilds } from '../screens/Guilds';

const {Navigator, Screen} = createStackNavigator();

export function AuthRoutes(){
    return(
        <Navigator
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: theme.color.secondary100
            }
        }}
        >
            <Screen name="Signin"
              component={Signin } />
            <Screen name="Home"
                component={Home } />
             <Screen 
                name="AppointmentDetails"
                component={AppointmentDetails}
             />
             <Screen 
                name="AppointmentCreate"
                component={AppointmentCreate}
             />
              <Screen 
                name="Guilds"
                component={Guilds}
             />
             
        </Navigator>
    )

}