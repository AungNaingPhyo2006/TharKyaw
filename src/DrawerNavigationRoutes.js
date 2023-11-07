// Import React
import React from 'react';

// Import Navigators from React Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Screens

import CustomSidebarMenu from './components/CustomSidebarMenu';
import NavigationDrawerHeader from './components/NavigationDrawerHeader';
import HomeScreen from './drawerScreens/HomeScreen';
import SettingsScreen from './drawerScreens/SettingScreen';
import HomeStack from './drawerNavigator/HomeStack';
import SettingStack from './drawerNavigator/SettingStack';
import { Dimensions } from 'react-native';
import { Home, Settings } from 'lucide-react-native';
const Stack = createNativeStackNavigator();

const DrawerNavigatorRoutes = (props) => {
  const windowWidth = Dimensions.get('window').width;

// Calculate the drawer width based on the screen width
const drawerWidth = windowWidth * 0.8; // Adjust the factor (0.7) as needed
  return (
    <Stack.Navigator
    initialRouteName='HomeStack'
      screenOptions={{headerShown: false,
        drawerStyle: {
          // backgroundColor:'red',
         backgroundColor: '#c6cbef', 
          width: drawerWidth, 
        },
        headerStyle: {
          backgroundColor: '#f4511e', 
        },
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        },
        drawerLabelStyle: {
          color: 'white', 
        },
        drawerActiveTintColor: '#fff',
      }}
      drawerContent={CustomSidebarMenu}
      >
      <Stack.Screen
        name="HomeStack"
        options={{
          drawerLabel: 'သာမဏေကျော် အသင်းများ',
       //  drawerItemStyle:{height:0}
        drawerIcon: ({ color, size }) => (
        <Home name="cog" size={size} color={"white"} /> // Icon component
      ),
        }}
        component={HomeStack}
      />
      <Stack.Screen
        name="SettingStack"
        options={{
          drawerLabel: 'Settings',
          drawerIcon: ({ color, size }) => (
            <Settings name="cog" size={size} color={"white"} /> // Icon component
          ),
        }}
        component={SettingStack}
      />
    </Stack.Navigator>
  );
};

export default DrawerNavigatorRoutes;