import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationDrawerHeader from '../components/NavigationDrawerHeader';
import SettingScreen from '../drawerScreens/SettingScreen';

const Stack = createNativeStackNavigator();

const SettingStack = ({navigation}) => {
  return (
    <Stack.Navigator
    initialRouteName="SettingScreen"
    screenOptions={{
      headerLeft: () => (
        <NavigationDrawerHeader navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: '#307ecc', //Set Header color
      },
      headerTintColor: '#fff', //Set Header text color
      headerTitleStyle: {
        fontWeight: 'bold', //Set Header text style
      },
      headerTitleAlign: 'center', 
    }}>
    <Stack.Screen
      name="SettingScreen"
      component={SettingScreen}
      options={{
        title:'',
       // title: 'Settings', //Set Header Title
      }}
    />
  </Stack.Navigator>
  )
}

export default SettingStack

const styles = StyleSheet.create({})