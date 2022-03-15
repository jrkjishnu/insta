import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = ({navigation}) => {
  const [data,setData] = useState()
  useEffect(()=>{
    getData();
  },[])
  const getData = async()=>{
    try {
      const value = await AsyncStorage.getItem('user')
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