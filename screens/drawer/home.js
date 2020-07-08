import React, { Component } from 'react';

import "react-native-gesture-handler";
import { Platform, 
         StyleSheet, 
         View, Text, 
         Image, Button, 
         Modal, TouchableOpacity, 
         TextInput,SafeAreaView } from "react-native";
import { SearchBar } from 'react-native-elements';

class Home extends Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
  
  
  
    return (
      <SafeAreaView style={styles.container}>
      <SearchBar
        placeholder=" If You Know Type Here..."
        inputStyle={{backgroundColor: 'white'}}
        containerStyle={{backgroundColor: '#006400', borderWidth: 1, borderRadius: 5}}
        onChangeText={this.updateSearch}
        value={search}
      ></SearchBar>
      <SearchBar
      placeholder=" Search by Kingdom..."
      inputStyle={{backgroundColor: 'white'}}
      containerStyle={{backgroundColor: '#006400', borderWidth: 1, borderRadius: 5}}
      onChangeText={this.updateSearch}
      value={search}
    ></SearchBar></SafeAreaView>
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

export default Home;