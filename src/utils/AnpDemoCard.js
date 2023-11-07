import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

const AnpDemoCard = ({ title,onPress}) => {
const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.cardTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex:1,
    height:160,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    margin: 8,
  },
  cardTitle: {
    color:'blue',
    fontSize: 16,
  },
});

export default  AnpDemoCard;
