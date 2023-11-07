import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity ,Image} from 'react-native';
import { mmConvert2en } from '../constants/mmConvert2en';
const AnpCard = ({ year,name,level, title,toNavigate, data,extraData,vipData, image}) => {
const navigation = useNavigation();
const navigateToScreen = () => {
  navigation.navigate(toNavigate, { data ,extraData, vipData});
};

  return (
    <TouchableOpacity style={styles.card} onPress={navigateToScreen}> 
    <View style={{  flexDirection:image ?'row' : '' , }}>
    {image && (
      <View style={{ }}>
      <Image source={image} style={{ width:60,height:60,marginVertical:5 ,marginRight:12}} />
   </View>
    )}
    
    {year && (
      <Text style={styles.cardTitle}>{mmConvert2en(year)} ခုနှစ် မေးခွန်း</Text>
    )}
    {name && (
      <Text style={styles.cardTitle}>{name}</Text>
    )}
    {level&& (
      <Text style={styles.cardTitle}>{level}</Text>
    )}
    {title && (
      <Text style={styles.cardTitle}>{title}</Text>
    )}
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex:1,
    // height:90,
    backgroundColor: 'white',
    borderRadius: 10,
   paddingVertical:20,
   paddingHorizontal: 6,
    margin: 8,
  },
  cardTitle: {
    color:'blue',
    fontSize: 18,
    textAlign:'justify',
    alignSelf:'center',
  },
});

export default  AnpCard;
