import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Canvas from '../../components/common/Canvas';

const data = [
    "あ", "い", "う", "え", "お",
    "か", "き", "く", "け", "こ",
    "さ", "し", "す", "せ", "そ",
    "た", "ち", "つ", "て", "と",
    "な", "に", "ぬ", "ね", "の",
    "は", "ひ", "ふ", "へ", "ほ",
    "ま", "み", "む", "め", "も",
    "や",       "ゆ",       "よ",
    "ら", "り", "る", "れ", "ろ",
    "わ",                   "を",
    "ん",
    "が", "ぎ", "ぐ", "げ", "ご",
    "ざ", "じ", "ず", "ぜ", "ぞ",
    "だ", "ぢ", "づ", "で", "ど",
    "ば", "び", "ぶ", "べ", "ぼ",
    "ぱ", "ぴ", "ぷ", "ぺ", "ぽ",
  ];
  

const HomeScreen = () => {
  return (
    <View style={{}}>
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View style={styles.dataSlide}>
              <Text style={styles.dataText}>{item}</Text>
            </View>
          )}
        />
      </View>
      </View>

      <View style={{ height:'85%',marginTop:150}}>
      <Canvas />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the container takes the full screen height
    // backgroundColor:'blue',
  },
  dataContainer: {
    height: 200, // Specify a fixed height for the data container
    marginVertical: 10,
//    backgroundColor:'red',
   paddingVertical:12,
  },
  dataSlide: {
    backgroundColor: 'gray',
    height: 100,
    width: 100,
    marginHorizontal: 8,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 9,
  },
  dataText: {
    color: '#ffffff',
    fontSize:36,
  },
});

export default HomeScreen;
