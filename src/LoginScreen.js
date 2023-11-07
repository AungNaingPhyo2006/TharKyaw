// Import React and Component
import React, {useState, createRef,useEffect,useRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Animated,
  Easing
} from 'react-native';

import Loader from './components/Loader';
import AnpButton from './utils/AnpButton';
import AnpTextAnimation from './utils/AnpTextAnimation';

const LoginScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();

  const [buttonPosition] = useState(new Animated.Value(0));
  const noMoveButton = () => {
    // Move the button back to its original position if the input is filled.
    if (userEmail) {
      Animated.spring(buttonPosition, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
    }
  };
  const moveButton = () => {
    Animated.spring(buttonPosition, {
      toValue: 1100, // Adjust this value to change the button's position.
      useNativeDriver: false,
    }).start();
  };
  
  const handleButtonPress = () => {
    if (!userEmail ) {
      moveButton();
    } else {
      // alert('Button Pressed!');
      noMoveButton()
      handleSubmitPress()
    }
  };

//   const handleSubmitPress = () => {
//     setErrortext('');
//     if (!userEmail) {
//       alert('Please fill Email');
//       return;
//     }
//     if (!userPassword) {
//       alert('Please fill Password');
//       return;
//     }
//     setLoading(true);
//     let dataToSend = {email: userEmail, password: userPassword};
//     let formBody = [];
//     for (let key in dataToSend) {
//       let encodedKey = encodeURIComponent(key);
//       let encodedValue = encodeURIComponent(dataToSend[key]);
//       formBody.push(encodedKey + '=' + encodedValue);
//     }
//     formBody = formBody.join('&');

//     fetch('http://localhost:3000/api/user/login', {
//       method: 'POST',
//       body: formBody,
//       headers: {
//         //Header Defination
//         'Content-Type':
//         'application/x-www-form-urlencoded;charset=UTF-8',
//       },
//     })
//       .then((response) => response.json())
//       .then((responseJson) => {
//         //Hide Loader
//         setLoading(false);
//         console.log(responseJson);
//         // If server response message same as Data Matched
//         if (responseJson.status === 'success') {
//           AsyncStorage.setItem('user_id', responseJson.data.email);
//           console.log(responseJson.data.email);
//           navigation.replace('DrawerNavigationRoutes');
//         } else {
//           setErrortext(responseJson.msg);
//           console.log('Please check your email id or password');
//         }
//       })
//       .catch((error) => {
//         //Hide Loader
//         setLoading(false);
//         console.error(error);
//       });
//   };
// <==================>

// Handle user login

const handleSubmitPress = async () => {
  navigation.replace('HomeScreen');
return;
    setErrortext('');
    if (!userEmail) {
      // moveButton(); // Move the button if the email is empty
     alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    setLoading(true);
    try {
      // userData ကို AsyncStorage မှ ပြန်လည်ရယူ။
      const savedUserJSON = await AsyncStorage.getItem('user');
      if (savedUserJSON) {
        const savedUser = JSON.parse(savedUserJSON);
  
        // userEmailနှင့် userPassword သည် သိမ်းဆည်းထားသော userData နှင့် ကိုက်ညီပါက login။
        if (
            userEmail === savedUser.email &&
            userPassword === savedUser.password
        ) {
          
        // user သည် အကောင့်ဝင်ထား။
         //HomeScreen သို့ လမ်းညွှန် 
          setLoading(false);
          navigation.replace('HomeScreen');
        } else {
          // Incorrect username or password
          // Display an error message
          setLoading(false);
          alert('incorrect username and password!')
        }
      } else {
        //AsyncStorage တွင် user ကို ရှာမတွေ့။
        // Display an error message or handle as needed
        setLoading(false);
        alert('No user is registered!')
        navigation.replace('RegisterScreen');    
      }
    } catch (error) {
    setLoading(false);
      console.error('Error during login:', error);
    }
  };


  
//  <=======================>

  return (
    <View style={styles.mainBody}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
        
            <View style={{
              width:120,height:120,alignSelf:'center',
              justifyContent:'center', marginVertical:12,          
          }}>
              <Image
              source={require('../src/assets/appLogo.jpg')}

                style={{
                  width: 120,
                  height: 120,
                 resizeMode: 'cover',
                  borderRadius:120,
                  alignSelf: 'center',
                }}
              />
            </View>
         
            <View style={{marginHorizontal:12, alignItems:'center',marginTop:12}}>
               <AnpTextAnimation/>
            </View>
 
             <View style={{ marginHorizontal:12, padding:15, alignItems:'center'}}>
             <Text style={{color:'yellow'}}>သာမဏေကျော် မေးခွန်းဟောင်းများ စုစည်းမှု</Text>
             </View>
             <View style={styles.SectionStyle}>
             <Text style={styles.inputStyle}>
             စိတ်ကောင်းစာတတ်၊ အကျင့်မြတ်၊ {`\n`}လိုအပ် သာသနာ။ 
           </Text>
        </View>
            
             

            <View style={{marginTop:10}}>
              <AnpButton onPress={handleSubmitPress} title="Continue"/>
            </View>
            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('RegisterScreen')}>
              မှတ်မှတ်သားသား စာစကား
            </Text>
          
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#307ecc',
    alignContent: 'center',
  },
  SectionStyle: {
    marginTop: 20,
    marginVertical:12,
  },

 
  inputStyle: {
    color:'yellow', 
    marginHorizontal:12,
    paddingHorizontal: 11,
    paddingVertical: 15,
    borderWidth: 0.5,
   borderRadius: 3,
   borderColor: '#dadae8',
   textAlign:'justify',
   fontSize:18,
   fontStyle:'italic',
   alignSelf:'center'
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
    textDecorationLine:'underline',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});