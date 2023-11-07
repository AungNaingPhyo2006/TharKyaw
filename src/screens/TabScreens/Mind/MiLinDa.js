import { StyleSheet,SafeAreaView,Dimensions, Text,TouchableOpacity, View, ScrollView, FlatList, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import AnpButton from '../../../utils/AnpButton'
import AnpHeader from '../../../utils/AnpHeader'
import MilinDaData from '../../../utils/data/MilinDaData'
import { fontSizes, colors } from '../../../utils/AnpStyleConfig'
import AnpDemoCard from '../../../utils/AnpDemoCard'
import AnpModal from '../../../utils/AnpModal'
import AnpFloating from '../../../utils/AnpFloating'
const MiLinDa = ({navigation}) => {
  const [visibleData, setVisibleData] = useState(MilinDaData.Tbl_MMProverbsTitle.slice(0, 10));
  const [loadedItems, setLoadedItems] = useState(10);
  const [modalVisible, setModalVisible] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const loadMoreData = () => {
    const newVisibleData = MilinDaData.Tbl_MMProverbsTitle.slice(0, loadedItems + 10);
    // console.warn(newVisibleData)
    setVisibleData(newVisibleData);
    setLoadedItems(loadedItems + 10);
  };
  
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      loadMoreData();
      setIsRefreshing(false);
    }, 1000); // Simulated delay for refreshing data
  };
    return (
        <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, marginHorizontal: 20}}>
     
          <View style={{marginBottom: 0}}>

          <FlatList
            data={visibleData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={{}}>
              <Text style={{color:'blue'}}>{item.TitleId}</Text>
              <AnpDemoCard  title={item.TitleName} onPress={()=> setModalVisible(true)}/>
              </View>
            )}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
            }
          />


        
          {loadedItems < MilinDaData.Tbl_MMProverbsTitle.length && (
            <TouchableOpacity style={{
              borderWidth:1,
              paddingVertical:9,
             alignSelf: 'center', 
              justifyContent: 'center', 
              width: 90, 
              height: 50, 
              position: 'absolute', 
              borderRadius:9,
              bottom: 30,  
            }}
            onPress={loadMoreData}>
            <Text style={{color:'#000000', alignSelf:'center'}} >See more...</Text>
            </TouchableOpacity>
          )}

        <AnpFloating/>

        </View>
         <AnpModal 
         modalVisible={modalVisible}  
         setModalVisible={setModalVisible}/>

        </View>
      </SafeAreaView>
      )
}

export default MiLinDa

const styles = StyleSheet.create({})