import { Button, FlatList, StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import { Camera } from 'lucide-react-native';
import AnpButton from '../../../utils/AnpButton'
import AnpCard from '../../../utils/AnpCard';
import AnpHeader from '../../../utils/AnpHeader';
import {fontSizes ,colors} from '../../../utils/AnpStyleConfig.js'
import { MANDALAY_IMAGE, YANGON_IMAGE } from '../../../constants/ImageConstant';
const MindHome = ({navigation}) => {

  const data = [
    { id: '1', title: 'သကျသီဟအသင်း',
    name : 'Mandalay' ,toNavigate : 'Levels', image : MANDALAY_IMAGE},
    { id: '2', title: 'သာသနာ့ဝန်ဆောင်အသင်း' ,
    name : 'Yangon',toNavigate : 'Levels' , image: YANGON_IMAGE},
    // { id: '3', title: 'Go to MinLinDa' ,toNavigate : 'MiLinDa'},
    // { id: '4', title: 'Go to PaThaNa' ,toNavigate : 'PaThaNa'},
  ];

  const renderCard = ({ item }) => (
    <AnpCard title={item.title} toNavigate={item.toNavigate} data={item.name} image={item.image}/>
  );
  return (
    <View style={{flex:1}}>

    <View style={{padding:12,borderWidth:1,borderColor:colors.secondary,borderRadius:5, margin:12,backgroundColor:colors.background,alignItems:'center', justifyContent:'center',}}>
    <View style={{ width:'100%',alignItems:'center',}}>
    <Text style={{fontWeight:'bold', fontSize:fontSizes.large}}>သာမဏေကျော်မေးခွန်းဟောင်းများ</Text>
    </View>
    </View>

     <View style={{flex:1,marginHorizontal:12}}>
            <View style={{width:'100%'}}>
            <FlatList
            data={data}
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

export default MindHome

const styles = StyleSheet.create({})