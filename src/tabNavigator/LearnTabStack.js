import { Home } from 'lucide-react-native';
import React, { useState } from 'react';
import { View, TextInput,  Animated, StyleSheet ,TouchableOpacity} from 'react-native';
import AnpButton from '../utils/AnpButton';


const LearnTabStack = ({navigation}) => {
  const [inputText, setInputText] = useState('');
  const [buttonPosition] = useState(new Animated.Value(0));

  const handleInputChange = (text) => {
    setInputText(text);
    // Move the button back to its original position if the input is filled.
    if (text !== '') {
      Animated.spring(buttonPosition, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
    }
  };

  const moveButton = () => {
    // Move the button to the right when the input is empty.
    Animated.spring(buttonPosition, {
      toValue: 1100, // Adjust this value to change the button's position.
      useNativeDriver: false,
    }).start();
  };

  const handleButtonPress = () => {
    if (inputText === '') {
      moveButton();
    } else {
      // Handle button press when input is filled.
      // You can perform the desired action here.
      alert('Button Pressed!');
    }
  };

  return (
    <View >
      <View style={styles.SectionStyle}>
      <TextInput
        placeholder="Enter text"
        placeholderTextColor={"blue"}
        value={inputText}
        onChangeText={handleInputChange}
        style={styles.inputStyle}
      />
      </View>
      <Animated.View
        style={{
          transform: [{ translateX: buttonPosition }],
        }}
      >
      <AnpButton onPress={handleButtonPress} title="Press Me"/>
 
     
      </Animated.View>
    </View>
  );
}

export default LearnTabStack

const styles = StyleSheet.create({
  SectionStyle: {
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  inputStyle: {
    flex: 1,
      color: 'red',
     paddingLeft: 15,
     paddingRight: 15,
     borderWidth: 1,
    borderRadius: 3,
    borderColor: '#dadae8',
   },
})