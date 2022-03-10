import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen' 
import RootNavigator from './src/navigation/RootNavigator';
import LoginScreen from './src/screens/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import RootStackNavigator from './src/navigation/RootStackNavigator';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{headerShown: false,style:{
    //       height:90,
    //       backgroundColor:'red'
    //   }}}>
    //   <Stack.Screen
    //       name="Login"
    //       component={LoginScreen}
    //       independent={true}
    //     />
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       Screen={HomeScreen}
    //       independent={true}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <RootStackNavigator />
  );
};

export default App;