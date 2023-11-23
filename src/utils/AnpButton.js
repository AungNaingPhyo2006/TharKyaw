import React from 'react';
import { TouchableOpacity, Text, Animated } from 'react-native';

const Button = ({ onPress, title, buttonPosition }) => {
  return (
      <TouchableOpacity
        style={{
         // backgroundColor:'gray',
         // backgroundColor: '#7DE24E',
          borderWidth: 1,
          color: '#FFFFFF',
          borderColor: '#7DE24E',
          // height: 40,
          alignItems: 'center',
          borderRadius: 30,
          marginLeft: 35,
          marginRight: 35,
          marginTop: 20,
          marginBottom: 25,
          elevation: 5
        }}
        activeOpacity={0.5}
        onPress={onPress}
      >
        <Text style={{ color: '#FFFFFF', paddingVertical: 10, fontSize: 16 }}>
          {title}
        </Text>
      </TouchableOpacity>
  );
};

export default Button;
