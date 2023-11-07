// Import React and Component
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

const NavigationDrawerHeader = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Image
          source={require('../assets/OnePay.png')}
          style={{width: 30, height: 30, marginHorizontal: 5, borderRadius:50}}
        />
      </TouchableOpacity>
    </View>
  );
};
export default NavigationDrawerHeader;