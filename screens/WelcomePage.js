import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import  FixedBottom from '../components/FixedBottom';
import  FixedHeader from '../components/FixedHeader';
import {LinearGradient} from 'expo-linear-gradient';
export default class WelcomePage extends Component  {
   constructor(props) 
   {
    super(props);
    this.state = {
      show: false
    }
   }
  render() {
      return (
        <LinearGradient
        style={styles.container}
        colors={[
          "#006400",
          "#32CD32"
        ]}
      >
        <SafeAreaView style={styles.container}>

          <Text style={styles.welcome}>The Botanist's Bible</Text>
         <Image
           source={require("../assets/potted-plant.png")}
           style={styles.backgroundImage}
         ></Image>
  
         <Text style={styles.welcome}>Welcome Plant Lovers!!</Text>
         <View style={{flexDirection:"row"}}>
         <MaterialIcons
           name='arrow-upward'
           size={24}
           style={styles.modal}
           onPress = {() => this.props.navigation.navigate('Register')}
           />
            <MaterialIcons
             name='arrow-forward'
             size={24}
             style={styles.modal}
             onPress = {() => this.props.navigation.navigate('Login')} 
            />
 
           </View>
           <View><Text style={styles.signtext}>Sign Up or Login</Text></View>
           <View><Text style={styles.signtext2}>Look up thousands of different</Text></View>
           <View><Text style={styles.signtext2}>arboreal and botanical taxonomy facts</Text></View>
           <FixedBottom>
           <Image 
    source={require('../assets/border.png')}
    style={{width: '100%'}} 
/></FixedBottom>

</SafeAreaView>
</LinearGradient>
          
      );
  }
} 
   const styles = StyleSheet.create({
     container: {
       flex: 1,
       justifyContent: "center",
       alignItems: "center",
       flexDirection: "column",

     },
     welcome: {
       fontSize: 28,
       textAlign: "center",
       margin: 10,
       color:'#FFD700',
       paddingLeft:30,
       paddingRight:30,
       textShadowColor:'#000',
       textShadowOffset:{width: 5, height: 5},
       textShadowRadius:10,
       fontWeight: 'bold'
     },
     backgroundImage: {
       width: 175,
       height: 200,
       borderRadius: 25,
     },
     modal: {
      marginTop: 0,
       marginBottom: 3,
       borderWidth: 2,
       borderColor: 'black',
       paddingTop: 10,
       paddingBottom: 10,
       paddingLeft: 12,
       paddingRight: 10,
       borderRadius: 15,
       alignSelf: 'center',
       backgroundColor: "#ffffff",
       flexDirection: 'row',
       margin: 2,
       textShadowColor:'#000',
       textShadowRadius:10,
       fontWeight: 'bold'
     },
    signtext: {
      color: '#FFD700',
      fontSize: 20,
      paddingLeft:30,
      paddingRight:30,
      textShadowColor:'#000',
      textShadowOffset:{width: 5, height: 5},
      textShadowRadius: 20,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    signtext2: {
      color: '#FFD700',
      fontSize: 16,
      paddingLeft:30,
      paddingRight:30,
      textShadowColor:'#000',
      textShadowOffset:{width: 5, height: 5},
      textShadowRadius: 20,
      fontWeight: 'bold',
      textAlign: 'center'
    }
   }); 

  
