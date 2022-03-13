import React, { useState } from 'react';
import {View, Text, StyleSheet, Pressable, TextInput,Button, ScrollView} from 'react-native';
import RootNavigator from '../navigation/RootNavigator';
import HomeScreen from './HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { emailValidator } from '../../validator';
const SigninScreen = ({navigation})=>{
    const [userData,setUserData] = useState()
    const [password,setPassword] = useState()
    const [confirmpassword,setconfirmPassword] = useState()

    const [age,setAge] = useState()
    const [email,setEmail] = useState()

    const [nameError,setUserError] = useState(false)
    const [passwordError,setPasswordError] = useState(false)
    const [ageError,setageError] = useState(false)
    const [emailReq,setEmailReq] = useState(false)
    const [emailValid,setEmailValid] = useState(false)
    const [confirmpasswordError,setconfirmPasswordError] = useState(false)

    const handleSubmit = async()=>{
      !userData?setUserError(true):setUserError(false)
      !password?setPasswordError(true):setPasswordError(false)

      !confirmpassword?setconfirmPasswordError(true):setconfirmPasswordError(false)
      !age?setageError(true):setageError(false)
      let validate = emailValidator(email)
      validate.required?setEmailReq(false): setEmailReq(true)
      validate.valid?setEmailValid(false): setEmailValid(true)
      if(userData&&password&&age){
        setUserError(false)
        setPasswordError(false)
        try {
            await AsyncStorage.setItem('user', userData)
          } catch (e) {
            // saving error
          }
          setUserData('')
          setPassword('')
        navigation.navigate('home')
      }
    }
    return(
        <View style={styles.screenContainer}>
            <View style={styles.welcome}>
            <Text style={{color:'white',fontSize:50,marginTop:130}}>Welcome</Text>
            </View>
            <View style={styles.form}>
            <Text style={{textAlign:'center',fontSize:40}}>SignIn</Text>
            <ScrollView style={styles.formContainer}>
                <Text style={styles.text}>UserName</Text>
                <TextInput style={styles.textInput} value={userData} placeholder="Enter the username"  onChangeText={(e)=>setUserData(e)}></TextInput>
                {nameError && <Text style={styles.error}>Username is Required</Text>}
                <Text style={styles.text}>Age</Text>
                <TextInput style={styles.textInput}  placeholder="Enter the Age"  value={age} onChangeText={(e)=>setAge(e)}></TextInput>
                {ageError && <Text style={styles.error}>Age is Required</Text>}
                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.textInput}  placeholder="Enter the Email"  value={email} onChangeText={(e)=>setEmail(e)}></TextInput>
                {emailReq && <Text style={styles.error}>Email is Required</Text>}
                {emailValid && <Text style={styles.error}>Enter a valid Required</Text>}
                <Text style={styles.text}>Password</Text>
                <TextInput style={styles.textInput}  placeholder="Enter the password" secureTextEntry={true} value={password} onChangeText={(e)=>setPassword(e)}></TextInput>
                {passwordError && <Text style={styles.error}>Password is Required</Text>}
                <Text style={styles.text}>Confirm Password</Text>
                <TextInput style={styles.textInput}  placeholder="Enter the password" secureTextEntry={true} value={confirmpassword} onChangeText={(e)=>setconfirmPassword(e)}></TextInput>
                {confirmpasswordError && <Text style={styles.error}>Confirm Password is Required</Text>}
                {((password !== confirmpassword) || confirmpasswordError)  && <Text style={styles.error}>Password and Confirm Password Should be same</Text>}

            </ScrollView>
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
        textAlign:'center',margin:20
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
        flex:2,
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
  
  export default SigninScreen;