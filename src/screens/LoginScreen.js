import React, { useState } from 'react';
import {View, Text, StyleSheet, Pressable, TextInput,Button} from 'react-native';
import RootNavigator from '../navigation/RootNavigator';
import HomeScreen from './HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginScren = ({navigation})=>{
    const [userData,setUserData] = useState()
    const handleSubmit = async()=>{
        try {
            await AsyncStorage.setItem('user', userData)
          } catch (e) {
            // saving error
          }
          setUserData('')
        navigation.navigate('signup')
    }
    return(
        <View style={styles.screenContainer}>
            <View style={styles.welcome}>
            <Text style={{marginTop:140,color:'white',fontSize:50}}>Welcome</Text>
            </View>
            <View style={styles.form}>
            <Text style={{textAlign:'center',fontSize:40}}>Login</Text>
            <View style={styles.formContainer}>
                <Text style={styles.text}>UserName</Text>
                <TextInput style={styles.textInput} value={userData} placeholder="Enter the username" onT onChangeText={(e)=>setUserData(e)}></TextInput>
                <Text style={styles.text}>Password</Text>
                <TextInput style={styles.textInput}  placeholder="Enter the username"></TextInput>
            </View>
            {/* <Button 
            onPress={()=>{handleSubmit()}}
  title="Submit"
  color="#841584"
  style={{width:20,margin:20}}/> */}
  <Pressable
        style={styles.buttonStyle}
        onPress={() => {handleSubmit()}}>
        <Text style={styles.buttonTextStyle}>Submit</Text>
      </Pressable>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    buttons:{
        width:20
    },
    formContainer:{
        textAlign:'center',justifyContent:'center',margin:20
    },
    text:{
        fontSize:20
    },
    textInput:{
        fontSize:20,
        borderWidth:1,
        borderRadius:15,
        marginBottom:10

    },
    form:{
        flex:3,
        borderWidth:2,
        borderTopStartRadius:40,
        borderTopRightRadius:40,
        borderColor:'lightpink',
        //height:'100%',
        backgroundColor:'white'
    },
    welcome:{
        //height:240,
        flex:1,
        paddingHorizontal:15
    }
    ,
    screenContainer:{
        backgroundColor:'mediumseagreen',
        height:'100%'
    },
    screenContainers: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 32,
    },
    buttonStyle: {
      height: 54,
      width: '60%',
      marginTop: 2,
      marginLeft:75,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'skyblue',
      shadowRadius: 5,
      shadowOpacity: 0.7,
      shadowColor: 'rgba(46, 229, 157, 0.5)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
    },
    buttonTextStyle: {
      color: '#fdfdfd',
      fontWeight: '700',
    },
  });
  
  export default LoginScren;