import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MiLinDa from '../screens/TabScreens/Mind/MiLinDa';
import PaThaNa from '../screens/TabScreens/Mind/PaThaNa';
import MindHome from '../screens/TabScreens/Mind/MindHome';
import Levels from '../screens/TabScreens/Mind/Levels';
import Chapters from '../screens/TabScreens/Mind/Chapters';
import Questions from '../screens/TabScreens/Mind/Questions';
const Stack = createNativeStackNavigator();

const MindTabStack = () => {
  return (
   <Stack.Navigator initialRouteName='MindHome'>
   <Stack.Screen
   name="MindHome"
        component={MindHome}
        options={{ headerShown: false ,
     }}
   />
   <Stack.Screen
   name="MiLinDa"
        component={MiLinDa}
        options={{ 
          headerShown: false }}
   />
   <Stack.Screen
   name="PaThaNa"
        component={PaThaNa}
        options={{ headerShown: false }}
   />
 
   <Stack.Screen
   name="Levels"
        component={Levels}
        options={{ headerShown: false }}
   />
   <Stack.Screen
   name="Chapters"
        component={Chapters}
        options={{ headerShown: false }}
   />
   <Stack.Screen
   name="Questions"
        component={Questions}
        options={{ headerShown: false }}
   />
   
   </Stack.Navigator>
  )
}

export default MindTabStack

const styles = StyleSheet.create({})