import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import AnpCard from '../../../utils/AnpCard';
import AnpHeader from '../../../utils/AnpHeader';
import AnpFloating from '../../../utils/AnpFloating';
import { mmConvert2en } from '../../../constants/mmConvert2en';

const Questions = ({ route, navigation }) => {
  const { data, extraData } = route.params;
  // console.warn(data)
  const questions = data.questions;

  const renderCard = ({ item }) => (
    <AnpCard
      title={item.question}
      toNavigate="Answers"
      data={{ question: item.question, answer: item.answer }}
      onPress={() => {
        navigation.navigate('Answers', { question: item.question, answer: item.answer });
      }}
    />
  );

  return (
    <View style={{ flex: 1 }}>
    <View style={{marginHorizontal:12}}>
    <AnpHeader title="မေးခွန်းလွှာ"/>
    
    </View>
  
      <View style={{
        borderWidth:1,
        marginTop:12,
        padding:12,
       alignSelf: 'center', 
        justifyContent: 'center', 
        width: '89%', 
        borderRadius:9,
      }}>
      <Text style={{color:'blue',marginHorizontal: 12,alignSelf:'center', textAlign:'justify'}}>{mmConvert2en(data.academic_year)}- ခုနှစ်</Text>
      <Text style={{color:'blue',marginHorizontal: 12,alignSelf:'center',textAlign:'justify'}}>{data.academic_name}</Text>
      <Text style={{color:'blue',marginHorizontal: 12,alignSelf:'center',textAlign:'justify'}}>{data.academic_level}</Text>
      <Text style={{color:'blue',marginHorizontal: 12,alignSelf:'center',textAlign:'justify'}}>{data.academic_chapter}ဘာသာ မေးခွန်းလွှာ</Text>

      </View>

      <View style={{ flex: 1, marginHorizontal: 12,}}>

        <View style={{ width: '100%' }}>
          <FlatList
            data={questions}
            numColumns={1}
            renderItem={renderCard}
            keyExtractor={(item, index) => `${item.question}-${index}`}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default Questions;

const styles = StyleSheet.create({});
