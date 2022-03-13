import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import PolicyScreen from '../screens/PolicyScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import customeNavigator from './customeNavigation';

const Tab = createBottomTabNavigator();
const RootNavigator = () => {
  return (
        
      <Tab.Navigator screenOptions={{headerShown: false}}
      >
        <Tab.Screen name="custome" component={customeNavigator}  options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Profile" component={ProfileScreen}  options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Details" component={PolicyScreen} options={{
          tabBarLabel: 'Policy',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="hvac" color={color} size={size} />
          ),
        }}/>
      </Tab.Navigator>
  );
};

export default RootNavigator;