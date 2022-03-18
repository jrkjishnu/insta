import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginScren from '../screens/LoginScreen';
import SigninScreen from '../screens/SigninScreen';

const Stack = createNativeStackNavigator();
const PublicRoute = ()=>{
    return (
            <Stack.Navigator screenOptions={{headerShown: true}}>
                <Stack.Screen name="Login" component={LoginScren}/>
                <Stack.Screen name="signup" component={SigninScreen}/>            
            </Stack.Navigator>
    )
}

export default PublicRoute

