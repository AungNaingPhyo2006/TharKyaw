import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native';

const ExtraTabStack = () => {
  useFocusEffect(
    useCallback(() => {
      Alert.alert('Under Development!');
    }, [])
  );
  return (
    <View style={{justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:24, color:'blue'}}>Testing Page</Text>
    </View>
  )
}

export default ExtraTabStack

const styles = StyleSheet.create({})