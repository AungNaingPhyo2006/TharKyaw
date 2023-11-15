import { StyleSheet, Text, View, FlatList,Modal ,TouchableOpacity, ScrollView} from 'react-native';
import React, { useState } from 'react';
import AnpCard from '../../../utils/AnpCard';
import AnpHeader from '../../../utils/AnpHeader';
import AnpFloating from '../../../utils/AnpFloating';
import { mmConvert2en } from '../../../constants/mmConvert2en';
import { FolderClosed, PanelTopClose, ShieldClose, SidebarClose, XCircle } from 'lucide-react-native';

const Questions = ({ route, navigation }) => {
  const { data, extraData } = route.params;
  const questions = data.questions;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);


  const renderCard = ({ item }) => (
    <TouchableOpacity
    style={styles.card}
    onPress={() => {
      setSelectedItem(item);
      setModalVisible(true);
    }}
  >
    <View style={{ 
       marginHorizontal: 12 ,
      backgroundColor: 'white',
      borderRadius: 10,
     paddingVertical:20,
     paddingHorizontal: 6,
      marginTop: 18,
      elevation:5,}}>
      <Text style={{ fontSize: 18, marginHorizontal: 12 , textAlign:'justify'}}>{item.question}</Text>
    </View>
  </TouchableOpacity>
   
  );
  const AnswerModal = ({ isVisible, onClose, data, onPress }) => (
    <Modal visible={isVisible} animationType="slide" transparent>
    <ScrollView  
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{
      flexGrow: 1,
      justifyContent:'center', 
      alignItems:'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }}>
        <View style={{
        marginHorizontal:12,
          backgroundColor: 'white',
          margin:20,
          padding: 20,
          borderRadius: 10,
          elevation: 5,
        }}>
        <View style={{flexDirection:'row', justifyContent:'space-between',marginBottom:18}}>
          <Text style={{fontSize:18, color:'#000000',fontWeight:'bold'}}>အဖြေ။  ။</Text>
          <TouchableOpacity onPress={onPress} style={{}}>
          <XCircle size={28} color='#000000'/>
          </TouchableOpacity>
          </View>
          {
            data?.map( (item, index) => (
              <Text  key={index} style={{color:'blue', marginVertical:12, fontSize:18, textAlign:'justify' , letterSpacing:1,}}>{item.ans}</Text>

            ))
          }
        </View>
      </ScrollView>
    </Modal>
  );
  // <==============>
  return (
    <View style={{ flex: 1 }}>
    <View style={{marginHorizontal:12}}>
    <AnpHeader title="မေးခွန်းလွှာ"/>
    
    </View>
  
      <View style={{
        borderWidth:1,
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
          <AnswerModal
          isVisible={modalVisible}
          onClose={() => setModalVisible(false)}
          title={selectedItem?.title || ''}
          data={ selectedItem?.answer}
          onPress={() => setModalVisible(false)}
        />
        </View>
      </View>
    </View>
  );
};

export default Questions;

const styles = StyleSheet.create({});
