import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import AnpCard from '../../../utils/AnpCard';
import AnpHeader from '../../../utils/AnpHeader';

const Chapters = ({route}) => {
const {data,extraData} = route.params // level
// console.warn('hi',extraData)
const myData = [
  { id: '1', title: 'ဝိနည်း' ,toNavigate : 'AcademicYear', level: data},
  { id: '2', title: 'အင်္ဂုတ္တိုရ်',toNavigate : 'AcademicYear',level :data},
  { id: '3', title: 'ဓမ္မပဒ' ,toNavigate : 'AcademicYear',level:data},

];

const renderCard = ({ item }) => (
  <AnpCard title={item.title} 
  toNavigate={item.toNavigate} 
  data={item.level}
   extraData={item.title}
   vipData={extraData}/>
);
return (
  <View style={{flex:1}}>

   <View style={{flex:1,marginHorizontal:12}}>
  <AnpHeader title="ဘာသာ"/>

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

export default Chapters

const styles = StyleSheet.create({})