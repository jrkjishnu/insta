import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Pressable, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
const ProfileScreen = ({navigation}) => {
   const signOuts = async () => {
    try {
      await AsyncStorage.removeItem('user');
  }
  catch(exception) {
      console.log(exception);
  }
      console.log("navigation")
      try {
        // await GoogleSignin.revokeAccess();
        // await GoogleSignin.signOut();
        auth().signOut()
          .then((res) => navigation.navigate('Login'))
      } catch (error) {
        console.error(error);
      }
    };
  const [data,setData] = useState()
  useEffect(()=>{
    getData();
  },[])
  const getData = async()=>{
    try {
      const value = await AsyncStorage.getItem('user')
      console.log("val",value);
      if(value !== null) {
        setData(value)
      }
    } catch(e) {
      // error reading value
    }
  }
  return (
    <View style={styles.screenContainer}>
      <Text style={{fontSize:50}}>{data}</Text>
      <Button title="logout" onPress={()=>signOuts()}>SignOut</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
  },
  buttonStyle: {
    height: 54,
    width: '80%',
    marginTop: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2EE59D',
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

export default ProfileScreen;