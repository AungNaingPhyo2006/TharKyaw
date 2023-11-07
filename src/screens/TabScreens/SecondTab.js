import { StyleSheet,SafeAreaView, Text, View } from 'react-native'
import React from 'react'

const SecondTab = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={{flex: 1, padding: 16}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            marginBottom: 16,
          }}>
       
          This is the Second Tab Screen
        </Text>
      </View>
      <Text
        style={{
          fontSize: 18,
          textAlign: 'center',
          color: 'grey',
        }}>
        My Example{'\n'}React Native
      </Text>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: 'grey',
        }}>
        Aung Naing Phyo
      </Text>
    </View>
  </SafeAreaView>
  )
}

export default SecondTab

const styles = StyleSheet.create({})