import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginScren from '../screens/LoginScreen';
import SigninScreen from '../screens/SigninScreen';
import RootNavigator from './RootNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PublicRoute from './PublicRoute';

const Stack = createNativeStackNavigator();
const RootStackNavigator = ()=>{
    const [data,setData] = React.useState()
  React.useEffect(()=>{
      console.log("use");
    getData();
  },[])
  const getData = async()=>{
      console.log("uuuu");
    try {
      const value = await AsyncStorage.getItem('user')
      console.log("valij",value);
      if(value !== null) {
        setData(value)
      }
    } catch(e) {
        console.log("vcvvl");
      // error reading value
    }
  }
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="public" component={PublicRoute}/>
                <Stack.Screen name="root" component={RootNavigator}/>
           </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStackNavigator