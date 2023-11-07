// Import React and Component
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';

import Loader from './components/Loader';

const RegisterScreen = () => {
  
const data = [
  {quote : `အရာရာမှာ ...`},
  {quote : `ပထမ - ဗဟုသုတရှိဖို့`},
  {quote : `ဒုတိယ - သတိထားဖို့`},
  {quote : `တတိယ - မှန် မမှန် စုံစမ်းဖို့`},
  {quote : `စတုတ္ထ - ဝီရိယနဲ့ အလုပ်လုပ်ဖို့`},
  {quote : `ဝီရိယနဲ့ အလုပ်လုပ်ပါ။`},
  
];

const renderCard = ({ item }) => (
  <Text style={{color:'white',letterSpacing:0.5,paddingHorizontal:20,lineHeight:28,textAlign:'justify', fontSize:18, paddingVertical:8, textAlign:'center'}}> 
{item.quote}
</Text> 
);
//   <===============>

  return (
    <View style={{flex: 1, backgroundColor: '#307ecc'}}>
     
        <View style={{alignItems: 'center'}}>
          <Image
          source={require('../src/assets/appLogo.jpg')}

            style={{
              width: 150,
              height: 150,
              resizeMode: 'contain',
              margin: 30,
              borderRadius:100,
            }}
          />
        </View>
        <View style={{ width: '100%' , marginBottom:150}}>
        <FlatList
          data={data}
          numColumns={1}
          renderItem={renderCard}
          keyExtractor={(item, index) => `${item.quote}-${index}`}
        />
        <View style={{alignItems:'flex-end', marginHorizontal:12,marginTop:12,}}>
        <Text style={{color:'yellow'}}>တောင်မြို့ မဟာဂန္ဓာရုံဆရာတော်</Text>
        <Text style={{color:'yellow'}}>အရှင် ဇနကာဘိဝံသ</Text>
        </View>
       
      </View>

    </View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({

});