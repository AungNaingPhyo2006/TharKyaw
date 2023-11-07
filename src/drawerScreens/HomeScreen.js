// Import React and Component
import React, { useState ,useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FirstTabStack from '../tabNavigator/FirstTabStack';
import SecondTabStack from '../tabNavigator/SecondTabStack';
import LearnTabStack from '../tabNavigator/LearnTabStack';
import MindTabStack from '../tabNavigator/MindTabStack';
import ExtraTabStack from '../tabNavigator/ExtraTabStack';
import {BookCopy,BookOpen,ShipWheel } from 'lucide-react-native';
import { GalleryHorizontal } from 'lucide-react-native';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
const HomeScreen = ({navigation}) => {
  return (
    <Tab.Navigator initialRouteName='Mind' screenOptions={{ headerShown: false}}>
    <Tab.Screen name="Mind" component={MindTabStack} 
    options={{
      headerShown: false ,
      tabBarLabel: 'Exam', 
      tabBarLabelStyle:{
      fontSize:16,
      },
      tabBarIcon: ({ color, size }) => (
        <ShipWheel color={color} size={size} /> // Icon component
      ),
    }}/>
    <Tab.Screen name="Learn" component={LearnTabStack}  
    options={{
      headerShown: false ,
      tabBarLabel: 'Learn', 
      tabBarLabelStyle:{
        fontSize:16,
        },
      tabBarIcon: ({ color, size }) => (
        <BookOpen color={color} size={size} /> 
      ),
    }}/>
    <Tab.Screen name="Coin" component={ExtraTabStack}  
    options={{
      headerShown: false ,
      tabBarLabel: 'Extra', 
      tabBarLabelStyle:{
        fontSize:16,
        },
      tabBarIcon: ({ color, size }) => (
        <BookCopy color={color} size={size} /> 
      ),
    }}/>
   </Tab.Navigator>  
  );
};

export default HomeScreen;