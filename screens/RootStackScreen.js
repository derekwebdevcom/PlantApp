import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';


import WelcomePage from './WelcomePage';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="Welcome" component={WelcomePage}/>
        <RootStack.Screen name="Register" component={RegisterPage}/>
        <RootStack.Screen name="Login" component={LoginPage}/>
    </RootStack.Navigator>
);

export default RootStackScreen;