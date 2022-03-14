import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();
const CustomeNavigator = ()=>{
    return (
            <Stack.Navigator screenOptions={{headerShown: true}}>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="detail" screenOptions={{headerShown:false}} options={{headerTitle:"Details"}} component={DetailsScreen}/>
            </Stack.Navigator>
    )
}

export default CustomeNavigator