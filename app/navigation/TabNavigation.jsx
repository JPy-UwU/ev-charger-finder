import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import HomeScreen from '../screen/home/HomeScreen';
import FavoriteScreen from '../screen/favorite/FavoriteScreen';
import ProfileScreen from '../screen/profile/ProfileScreen';
import Colors from '../../utils/Colors';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ 
          tabBarLabel: "Search",
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-search" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name="Favorite"
        component={FavoriteScreen}
        options={{ 
          tabBarLabel: "Favorite",
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-heart" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name="Profile"
        component={ProfileScreen} 
        options={{ 
          tabBarLabel: "Profile",
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}