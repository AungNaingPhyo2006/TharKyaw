import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const AnpFloating = () => {
    const navigation = useNavigation()
  return (
   
        <TouchableOpacity 
      style={{ 
          borderWidth: 1, 
          borderColor: 'red', 
          alignItems: 'center', 
          justifyContent: 'center', 
          width: 50, 
          height: 50, 
          position: 'absolute', 
          top: 390, 
          right: 12, 
          borderRadius: 100, 
      }} 
      onPress={()=>{navigation.goBack()}}
  > 
      <Text style={{ color: "red" , fontWeight:'bold'}}>Back</Text> 
  </TouchableOpacity> 
    
  )
}

export default AnpFloating

const styles = StyleSheet.create({})