import React, { useState, useEffect } from 'react';
import { View, } from 'react-native';

import Home from './screens/drawer/home';
import BookMarks  from './screens/drawer/bookmarks';
import Notes from './screens/drawer/notes';
import Settings  from './screens/drawer/settings';
import Account  from './screens/drawer/account';

/* 
import Tab1 from './screens/tabs/Tab1';
import Tab2 from './screens/tabs/Tab2';
import Tab3 from './screens/tabs/Tab3'; */

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { startClock } from 'react-native-reanimated';
import { ActivityIndicator } from 'react-native-paper';
import { AuthContext } from './components/context';
import RootStackScreen from './screens/RootStackScreen';
import { DrawerContent } from './screens/DrawerContent';
import { createDrawerNavigator } from '@react-navigation/drawer'

const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

const Drawer = createDrawerNavigator();

const App = () => {
 

/* const [isLoading, setIsLoading] = React.useState(true);
const [userToken, setUserToken] = React.useState(null); */

const initialLoginState = {
  isLoading: true,
  userName: null,
  userToken: null,
};
loginReducer = (prevState, action) => {
  switch( action.type ){
    case 'RETRIEVE_TOKEN':
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
          case 'LOGIN':
          return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
          };
          case 'LOGOUT':
          return { ...prevState,
          userToken: null,
          userName:  null,
          isLoading: false,
        };
          case 'REGISTER':
          return {
          ...prevState,
          isLoading: false,
          userName: action.id,
          userToken: action.token,
          };
  }
};

const [ loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

 const authContext = React.useMemo(() =>({
  signIn: (userName, password) => {
    /* setUserToken('fgkj');
    setIsLoading(false); */
    let userToken;
    userName = null;
    if ( userName === 'user' && password == 'pass'){
      userToken = 'dgdgdgdg'
    }
    dispatch({ type: 'LOGIN', id: userName, token: userToken });
  },
  signOut: () => {
    //setUserToken(null);
   // setIsLoading(false);
   dispatch({ type: 'LOGOUT'})
  },
  signUp: () => {
    setUserToken('fgkj');
    setIsLoading(false);
  },
}), []); 

    useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'REGISTER',  token: 'sdfjds' });
  }, 1000)
}, []); 

if( loginState.isLoading ) {
  return(
    <View style={{flex:1,justifyContent:'center',alignItems: 'center'}}>
      <ActivityIndicator size="large" />
    </View>
  );
}
 return(
 
<AuthContext.Provider value={authContext}>
<NavigationContainer>
{ loginState.userToken !== null ? (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="BookMarks" component={BookMarks} />
        <Drawer.Screen name="Notes" component={Notes}/>
        <Drawer.Screen name="Account" component={Account}/>
        <Drawer.Screen name="Settings" component={Settings}/>
      </Drawer.Navigator>  



      
)
    :
    <RootStackScreen/>
    }
    </NavigationContainer>
    </AuthContext.Provider>
    
  );
}

export default App;