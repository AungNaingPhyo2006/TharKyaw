import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import AnpCard from '../../../utils/AnpCard';
import AnpHeader from '../../../utils/AnpHeader';

const Levels = ({route}) => {

  const { data } = route.params;
  const myData = [
    { id: '1', title: 'ပထမဆင့်' ,toNavigate : 'Chapters',},
    { id: '2', title: 'ဒုတိယဆင့်',toNavigate : 'Chapters'},
    { id: '3', title: 'တတိယဆင့်' ,toNavigate : 'Chapters'},
  
  ];

  const renderCard = ({ item }) => (
    <AnpCard title={item.title} toNavigate={item.toNavigate} data={item.title} extraData={data}/>
  );
  return (
    <View style={{flex:1}}>
     <View style={{flex:1,marginHorizontal:12}}>
     <AnpHeader title="အဆင့်"/>

            <View style={{width:'100%'}}>
            <FlatList
            data={myData}
            numColumns={1} 
            renderItem={renderCard}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            />
            </View>
    </View>
    </View>
  )
}

export default Levels

const styles = StyleSheet.create({})