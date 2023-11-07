import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../drawerScreens/HomeScreen';
import NavigationDrawerHeader from '../components/NavigationDrawerHeader';
import MiLinDa from '../screens/TabScreens/Mind/MiLinDa';
const Stack = createNativeStackNavigator();

const HomeStack = ({navigation}) => {
  return (
 <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title : '',
        // title: 'သာမဏေကျော် အသင်းများ', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {

           //  backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#FFF', //Set Header text color
          headerTitleStyle: {
            //fontWeight: 'bold', //Set Header text style
            fontSize:18
          },
          headerTitleAlign: 'center', 
        }}
      />
     
    </Stack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})