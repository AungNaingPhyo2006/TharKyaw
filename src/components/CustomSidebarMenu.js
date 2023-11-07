
import React, {useState, createRef, useEffect} from 'react';

import {View, Text, Alert, StyleSheet} from 'react-native';


import { Book, LogOut } from 'lucide-react-native';


const CustomSidebarMenu = (props) => {
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
 // console.warn(userName)
 

 
  return (
    <View style={stylesSidebar.sideMenuContainer}>
      <View style={stylesSidebar.profileHeader}>
        <View style={stylesSidebar.profileHeaderPicCircle}>
          <Text style={{fontSize: 25, color: '#307ecc'}}>
            {userName.charAt(0)}
          </Text>
        </View>
        <Text style={stylesSidebar.profileHeaderText}>
       {userName}
        </Text>
      </View>
      <View style={stylesSidebar.profileHeaderLine} />

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem

          label={({color}) => 
          <View style={{flexDirection:'row',}}>
             <LogOut size={20} color={"white"}/>
              <Text style={{color: '#d8d8d8', marginHorizontal:36}}>
             Quit
             </Text>
            </View> 
          }
          onPress={() => {
            props.navigation.toggleDrawer();
            Alert.alert(
              'Quit',
              'Are you sure? You want to Quit?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: 'Confirm',
                  onPress: () => {
                    AsyncStorage.clear();
                    props.navigation.replace('Auth');
                  },
                },
              ],
              {cancelable: false},
            );
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomSidebarMenu;

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#307ecc',
    paddingTop: 40,
    color: 'white',
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: '#307ecc',
    padding: 15,
    textAlign: 'center',
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: 'white',
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
  },
});