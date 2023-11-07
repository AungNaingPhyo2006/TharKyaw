import {ArrowLeftCircle } from 'lucide-react-native';
import React from 'react';
import { TouchableOpacity, Text, Animated ,View} from 'react-native';
import {fontSizes, colors } from './AnpStyleConfig';
import { useNavigation } from '@react-navigation/native';
const AnpHeader = ({ onPress, title, buttonPosition }) => {
  const navigation = useNavigation()
  return (
      <TouchableOpacity
        style={{
          backgroundColor:colors.background,
          borderWidth:1, 
          marginTop:6,
          borderRadius:5,
          width:'100%',
          padding: 12,
          marginBottom: 25,
          flexDirection:'row',
        }}
        activeOpacity={0.5}
        onPress={()=> navigation.goBack()}
      >
       <ArrowLeftCircle size={30} color={colors.backArrow}/>
     
          <View style={{width:'70%',alignItems:'center',marginLeft:12}}>
        <Text style={{ color:colors.header,fontWeight:'bold', fontSize: fontSizes.large }}>
          {title}
        </Text>
        </View>
      </TouchableOpacity>
  );
};

export default AnpHeader;
