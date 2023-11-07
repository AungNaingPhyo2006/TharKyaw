// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/

import React, { useState } from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  TextInput, 
 FlatList,
 TouchableOpacity
} from 'react-native';

const ThirdPage = ({ route, navigation }) => {
 
  return (
    <SafeAreaView style={{ flex: 1 }}>
     <View>
     <Button
     title="Go to Second Page"
     onPress={
       () => navigation.navigate('SecondPage')
     }
   /></View>
    </SafeAreaView>
  );
}

export default ThirdPage;