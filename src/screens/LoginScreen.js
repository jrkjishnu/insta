import React, { useState } from 'react';
import {View, Text, StyleSheet, Pressable, TextInput,Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginScren = ({navigation})=>{
    const [userData,setUserData] = useState()
    const [password,setPassword] = useState()
    const [nameError,setUserError] = useState(false)
    const [passwordError,setPasswordError] = useState(false)

    const handleSubmit = async()=>{
      userData === ""?setUserError(true):setUserError(false)
      password === ""?setPasswordError(true):setPasswordError(false)

      if(userData&&password){
        setUserError(false)
        setPasswordError(false)
        try {
            await AsyncStorage.setItem('user', userData)
          } catch (e) {
            // saving error
          }
          setUserData('')
          setPassword('')
        navigation.navigate('root')
      }
    }
    return(
        <View style={styles.screenContainer}>
            <View style={styles.welcome}>
            <Text style={{paddingHorizontal:30,paddingVertical:65,color:'white',fontSize:50}}>Welcome</Text>
            </View>
            <View style={styles.form}>
            <Text style={{textAlign:'center',fontSize:40}}>Login</Text>
            <View style={styles.formContainer}>
                <Text style={styles.text}>UserName</Text>
                <TextInput style={styles.textInput} value={userData} placeholder="Enter the username"  onChangeText={(e)=>setUserData(e)}></TextInput>
                {nameError && <Text style={styles.error}>Username is Required</Text>}
                <Text style={styles.text}>Password</Text>
                <TextInput style={styles.textInput}  placeholder="Enter the password" secureTextEntry={true} value={password} onChangeText={(e)=>setPassword(e)}></TextInput>
                {passwordError && <Text style={styles.error}>Password is Required</Text>}
                <Text>Don't have Account?<Text style={{fontSize:20,color:'blue'}} onPress={()=>{navigation.navigate('signup')}}>Signin</Text></Text>
            </View>
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
  error:{
    color:'red'
  },
    buttons:{
        width:20
    },
    formContainer:{
        textAlign:'center',justifyContent:'center',margin:20,
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
        marginTop:60,
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