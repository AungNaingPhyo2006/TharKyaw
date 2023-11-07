import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstTab from '../screens/TabScreens/FirstTab';
const Stack = createNativeStackNavigator();

const FirstTabStack = () => {

    return (
        <Stack.Navigator
          initialRouteName="FirstTab"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="FirstTab"
            component={FirstTab}

          />
        </Stack.Navigator>
      );
  
}

export default FirstTabStack

const styles = StyleSheet.create({})