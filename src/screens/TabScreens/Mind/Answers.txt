import React from 'react';
import { View, Text, ScrollView, FlatList,Dimensions } from 'react-native';
import AnpHeader from '../../../utils/AnpHeader';
import {fontSizes} from '../../../utils/AnpStyleConfig'

const Answers = ({ route }) => {
  const { data} = route.params;
  // console.warn(data.answer)
  const renderCard = ({ item }) => (
    <Text style={{letterSpacing:0.5,paddingHorizontal:20,lineHeight:28,textAlign:'justify', fontSize:fontSizes.large, paddingVertical:18}}> 
  {item.ans}
 </Text> 
  );
  return (
    <View style={{ flex: 1,alignItems: 'center' }}>
    <View style={{width:'90%', marginHorizontal:12}}>
    <AnpHeader title="အဖြေလွှာ"/>
    </View>
   {/*  <ScrollView style={{marginVertical:24}} showsVerticalScrollIndicator={false}>
      <Text style={{letterSpacing:0.5,paddingHorizontal:20,lineHeight:28,textAlign:'justify', fontSize:fontSizes.large, paddingVertical:18}}> 
         <Text style={{fontWeight:'bold'}}>(အဖြေ)</Text>
       {data.answer}
      </Text>     
      </ScrollView>
   */}
      <View style={{ width: '100%' , marginBottom:110}}>
      <FlatList
        data={data.answer}
        numColumns={1}
        renderItem={renderCard}
        keyExtractor={(item, index) => `${item.ans}-${index}`}
      />
    </View>
      </View>
  );
};

export default Answers;
