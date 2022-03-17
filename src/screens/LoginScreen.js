import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Pressable, TextInput,Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import SocialButton from '../components/SocialButton';

const LoginScren = ({navigation})=>{
  useEffect(()=>{
    GoogleSignin.configure({
      webClientId: '37085046743-jp47ff6787lmol1605to1g1g3tc6t2mk.apps.googleusercontent.com',
    });
  },[])
    const [userData,setUserData] = useState()
    const [password,setPassword] = useState()
    const [nameError,setUserError] = useState(false)
    const [passwordError,setPasswordError] = useState(false)
    const onGoogleButtonPress = async()=>{
      console.warn("sdf");
      try{
        // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return await auth().signInWithCredential(googleCredential);
      }
    catch(error){
      console.log("err",error);
    }
    }
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
  //   const onFacebookButtonPress = async()=>{
  //     try{
  //       const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

  // if (result.isCancelled) {
  //   throw 'User cancelled the login process';
  // }

  // // Once signed in, get the users AccesToken
  // const data = await AccessToken.getCurrentAccessToken();

  // if (!data) {
  //   throw 'Something went wrong obtaining access token';
  // }

  // // Create a Firebase credential with the AccessToken
  // const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

  // // Sign-in the user with the credential
  // return await auth().signInWithCredential(facebookCredential);
  //     }catch(error){
  //       console.log(error);
  //     }
  //   }
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
      <Text style={{marginLeft:'50%',marginTop:5}}>OR</Text>
      {/* <SocialButton
        buttonTitle="Sign Up with Facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => {onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}}
      /> */}
      <SocialButton 
        buttonTitle="Sign Up with Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => {onGoogleButtonPress().then(() => navigation.navigate('root'))}}
      />
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
        marginBottom:10,
        height:50

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
