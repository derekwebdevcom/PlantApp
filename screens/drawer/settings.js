import React, { Component } from 'react';

import "react-native-gesture-handler";
import { Platform, 
         StyleSheet, 
         View, Text, 
         Image, Button, 
         Modal, TouchableOpacity, 
         TextInput } from "react-native";



class Settings extends Component {
  render() {
      return (
          <View><Text>SettingsScreen</Text></View>
      )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00FF00",
    flexDirection: "column",
},
text : {
  textAlign: 'center',
  color: 'black',
  fontSize: 20
}}

export default Settings;