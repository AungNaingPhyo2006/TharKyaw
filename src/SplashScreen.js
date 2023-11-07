// Import React and Component
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native';


const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
        navigation.replace(
         'Auth'
        )
      
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
    <View style={{width:200,height:200,      
    }}>
      <Image
        source={require('../src/assets/appLogo.jpg')}
      style={{width: 200, height:200,resizeMode: 'contain',
      borderRadius:200, 
    }}
      />
    </View>
    <View style={{marginTop:20 , alignItems:'center'}}>
    <Text style={styles.textStyle}>
    မွန်ပြည်နယ်၊မော်လမြိုင်မြို့                                                                              
    </Text>
    <Text style={styles.textStyle}>                                                                                
    မဟာမြိုင်ပရိယတ္တိစာသင်တိုက်
    </Text>
    <Text style={styles.textStyle}>                                                                             
   ဂဏဝါစကအဖွဲ့
    </Text>
    
    </View>

      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  textStyle:{
    color:'white',
     fontSize:18,
    letterSpacing: 1 ,
     marginVertical:6
  }
});