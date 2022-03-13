import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import Icon from 'react-native-vector-icons/Ionicons';  
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import customeNavigator from './customeNavigation';

const Tab = createBottomTabNavigator();
const RootNavigator = () => {
  return (
        
      <Tab.Navigator screenOptions={{headerShown: false}}
      >
        <Tab.Screen name="Home" component={customeNavigator}  options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Details" component={DetailScreen}  options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarLabel: 'Policy',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="hvac" color={color} size={size} />
          ),
        }}/>
      </Tab.Navigator>
  );
};

export default RootNavigator;