import { StyleSheet, ScrollView,Text, View ,FlatList} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AnpCard from '../../../utils/AnpCard'
//for Mandalay
import FirstVinayaMandalay from '../../../utils/data/mandalay/FirstVinaya'
import FirstInguttaraMandalay from '../../../utils/data/mandalay/FirstInguttara'
import FirstDhammapadaMandalay from '../../../utils/data/mandalay/FirstDhammapada'
import SecondVinayaMandalay from '../../../utils/data/mandalay/SecondVinaya'
import SecondInguttaraMandalay from '../../../utils/data/mandalay/SecondInguttara'
import SecondDhammapadaMandalay from '../../../utils/data/mandalay/SecondDhammapada'
import ThirdVinayaMandalay from '../../../utils/data/mandalay/ThirdVinaya'
import ThirdInguttaraMandalay from '../../../utils/data/mandalay/ThirdInguttara'
import ThirdDhammapadaMandalay from '../../../utils/data/mandalay/ThirdDhammapada'
//for Yangon 
import FirstVinayaYangon from '../../../utils/data/yangon/FirstVinaya'
import FirstInguttaraYangon from '../../../utils/data/yangon/FirstInguttara'
import FirstDhammapadaYangon from '../../../utils/data/yangon/FirstDhammapada'
import SecondVinayaYangon from '../../../utils/data/yangon/SecondVinaya'
import SecondInguttaraYangon from '../../../utils/data/yangon/SecondInguttara'
import SecondDhammapadaYangon from '../../../utils/data/yangon/SecondDhammapada'
import ThirdVinayaYangon from '../../../utils/data/yangon/ThirdVinaya'
import ThirdInguttaraYangon from '../../../utils/data/yangon/ThirdInguttara'
import ThirdDhammapadaYangon from '../../../utils/data/yangon/ThirdDhammapada'
import AnpHeader from '../../../utils/AnpHeader'



const dataSources = [
  // Mandalay
  { condition: (data, extraData, vipData) => data === 'ပထမဆင့်' && extraData === 'ဝိနည်း' && vipData === 'Mandalay', source: FirstVinayaMandalay },
  { condition: (data, extraData, vipData) => data === 'ပထမဆင့်' && extraData === 'အင်္ဂုတ္တိုရ်' && vipData === 'Mandalay', source: FirstInguttaraMandalay },
  { condition: (data, extraData, vipData) => data === 'ပထမဆင့်' && extraData === 'ဓမ္မပဒ' && vipData === 'Mandalay', source: FirstDhammapadaMandalay },
  { condition: (data, extraData, vipData) => data === 'ဒုတိယဆင့်' && extraData === 'ဝိနည်း' && vipData === 'Mandalay', source: SecondVinayaMandalay },
  { condition: (data, extraData, vipData) => data === 'ဒုတိယဆင့်' && extraData === 'အင်္ဂုတ္တိုရ်' && vipData === 'Mandalay', source: SecondInguttaraMandalay },
  { condition: (data, extraData, vipData) => data === 'ဒုတိယဆင့်' && extraData === 'ဓမ္မပဒ' && vipData === 'Mandalay', source: SecondDhammapadaMandalay },
  { condition: (data, extraData, vipData) => data === 'တတိယဆင့်' && extraData === 'ဝိနည်း' && vipData === 'Mandalay', source: ThirdVinayaMandalay },
  { condition: (data, extraData, vipData) => data === 'တတိယဆင့်' && extraData === 'အင်္ဂုတ္တိုရ်' && vipData === 'Mandalay', source: ThirdInguttaraMandalay },
  { condition: (data, extraData, vipData) => data === 'တတိယဆင့်' && extraData === 'ဓမ္မပဒ' && vipData === 'Mandalay', source: ThirdDhammapadaMandalay},
  //Yangon
  { condition: (data, extraData, vipData) => data === 'ပထမဆင့်' && extraData === 'ဝိနည်း' && vipData === 'Yangon', source: FirstVinayaYangon },
  { condition: (data, extraData, vipData) => data === 'ပထမဆင့်' && extraData === 'အင်္ဂုတ္တိုရ်' && vipData === 'Yangon', source: FirstInguttaraYangon },
  { condition: (data, extraData, vipData) => data === 'ပထမဆင့်' && extraData === 'ဓမ္မပဒ' && vipData === 'Yangon', source: FirstDhammapadaYangon },
  { condition: (data, extraData, vipData) => data === 'ဒုတိယဆင့်' && extraData === 'ဝိနည်း' && vipData === 'Yangon', source: SecondVinayaYangon },
  { condition: (data, extraData, vipData) => data === 'ဒုတိယဆင့်' && extraData === 'အင်္ဂုတ္တိုရ်' && vipData === 'Yangon', source: SecondInguttaraYangon },
  { condition: (data, extraData, vipData) => data === 'ဒုတိယဆင့်' && extraData === 'ဓမ္မပဒ' && vipData === 'Yangon', source: SecondDhammapadaYangon },
  { condition: (data, extraData, vipData) => data === 'တတိယဆင့်' && extraData === 'ဝိနည်း' && vipData === 'Yangon', source: ThirdVinayaYangon },
  { condition: (data, extraData, vipData) => data === 'တတိယဆင့်' && extraData === 'အင်္ဂုတ္တိုရ်' && vipData === 'Yangon', source: ThirdInguttaraYangon },
  { condition: (data, extraData, vipData) => data === 'တတိယဆင့်' && extraData === 'ဓမ္မပဒ' && vipData === 'Yangon', source: ThirdDhammapadaYangon },
];

const getDataSource = (data, extraData, vipData) => {
  for (const source of dataSources) {
    if (source.condition(data, extraData, vipData)) {
      return source.source;
    }
  }
  return [];
};
const AcademicYear = ({route}) => {
  const {data, extraData, vipData} = route.params
// console.warn(data,extraData,vipData) //ပထမဆင့် ,  ဝိနည်း ,ရန်ကုန် 

 //=============================>
 const dataSource = getDataSource(data, extraData, vipData);

 const renderCard = ({ item }) => (
  <AnpCard 
  year={item.academic_year} 
  toNavigate={'Questions'} data = {item}/>
);

return (
  <View style={{flex:1}}>
   <View style={{flex:1,marginHorizontal:12}}>
  <AnpHeader title="ခုနှစ်"/>

          <View style={{width:'100%'}}>
          <FlatList
          data={dataSource}
          numColumns={1} 
          renderItem={renderCard}
          keyExtractor={item => item.academic_year.toString()}
          showsVerticalScrollIndicator={false}
          />
          </View>
  </View>
  </View>
)
}

export default AcademicYear

const styles = StyleSheet.create({})