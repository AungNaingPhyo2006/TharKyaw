import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AnpButton from '../../../utils/AnpButton'
const PaThaNa = ({navigation}) => {
  return (
    <View>
    <Text>PaThaNa</Text>

    <AnpButton title={"Go to MindHome"} onPress={()=>{navigation.navigate('MindHome')}}/>


    </View>
  )
}

export default PaThaNa

const styles = StyleSheet.create({})