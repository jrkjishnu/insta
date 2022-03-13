import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginScren from '../screens/LoginScreen';
import SigninScreen from '../screens/SigninScreen';
import RootNavigator from './RootNavigator';

const Stack = createNativeStackNavigator();
const RootStackNavigator = ()=>{
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={LoginScren}/>
                <Stack.Screen name="signup" component={SigninScreen}/>
                <Stack.Screen name="root" component={RootNavigator}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStackNavigator