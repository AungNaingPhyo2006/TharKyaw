import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SecondTab from '../screens/TabScreens/SecondTab';
const Stack = createNativeStackNavigator();

const SecondTabStack = () => {
    return (
        <Stack.Navigator
          initialRouteName="SecondTab"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="SecondTab"
            component={SecondTab}
          />
        </Stack.Navigator>
      );
}

export default SecondTabStack

const styles = StyleSheet.create({})