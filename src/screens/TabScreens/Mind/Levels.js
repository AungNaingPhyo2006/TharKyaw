import { StyleSheet, Text, View,FlatList ,TouchableOpacity, ScrollView} from 'react-native'
import React, { useState } from 'react'
import AnpCard from '../../../utils/AnpCard';
import AnpHeader from '../../../utils/AnpHeader';
import { ChevronDown, ChevronRight, ChevronUp } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const Levels = ({route}) => {

  const { data } = route.params;
  const navigation = useNavigation();
  const myData = [
    { id: '1',org: data, title: 'ပထမဆင့်' ,isExpanded : false , chapters : [ {ch:'ဝိနည်း'}, {ch:'အင်္ဂုတ္တိုရ်'},{ch:'ဓမ္မပဒ'}]},
    { id: '2',org: data, title: 'ဒုတိယဆင့်',isExpanded : false,chapters : [ {ch:'ဝိနည်း'}, {ch:'အင်္ဂုတ္တိုရ်'},{ch:'ဓမ္မပဒ'}]},
    { id: '3',org: data, title: 'တတိယဆင့်',isExpanded : false,chapters : [ {ch:'ဝိနည်း'}, {ch:'အင်္ဂုတ္တိုရ်'},{ch:'ဓမ္မပဒ'}]},
  ];
  const [mockData, setMockData] = useState(myData);

 
  const toggleExpand = (id) => {
    setMockData((prevData) =>
      prevData.map((obj) => ({
        ...obj,
        isExpanded: obj.id === id ? !obj.isExpanded : obj.isExpanded,
      }))
    );
  };
  const moveToChapters = (item,subItem) => {
    navigation.navigate('Chapters', {data : item, extraData: subItem})
  }
  // <===================>
  return (
    <View style={{flex:1}}>
     <ScrollView style={{flex:1,marginHorizontal:12}}>
     <AnpHeader title="အဆင့်"/>

            <View style={{flex:1}}>
           {mockData.map((item,index)=> (

            <View key={index.toString()} >
            <TouchableOpacity style={styles.card} onPress={()=>toggleExpand(item.id)}>
            <View  style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:12}}>
            <Text style={{fontSize:18, marginHorizontal:12,color:'blue'}}>{item.title}</Text>
            {item.isExpanded ? <ChevronUp size={24} color="cyan" /> : <ChevronDown size={24} color="cyan" />}  
            </View>
            </TouchableOpacity>
            
            {item.isExpanded && (
              <View style={{marginHorizontal:12 , borderBottomWidth:3, borderBottomColor:'red'}}>
                {item.chapters?.map((i,j)=> (
                  <TouchableOpacity style={{
                    flexDirection:'row',
                  justifyContent:'space-between',
                  padding:12,borderWidth:1,borderColor:'skyblue',
                  marginBottom:12,borderRadius:10,
                }}
                onPress={()=>{moveToChapters(item,i.ch)}}
                >
                  <Text key={j.toString()} style={{color:'red',fontSize:18}}>{i.ch}</Text>
                  <ChevronRight size={24} color="orange"/>
                  </TouchableOpacity>
                ))}
              </View>
             ) }
             </View>
           ))}
         
            </View>
    </ScrollView>
    </View>
  )
}

export default Levels;

const styles = StyleSheet.create({
  card: {
    // height:90,
    backgroundColor: 'white',
    borderRadius: 10,
   paddingVertical:20,
   paddingHorizontal: 6,
    margin: 8,
    elevation:5,
  },
})