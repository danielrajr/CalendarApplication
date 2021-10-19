/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from 'react-native-splash-screen'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  useEffect(() => {
    SplashScreen.hide();
    GoogleSignin.configure({
      scopes: [],
  webClientId: '163320990352-7nau5hi37jjckd0hihepu4ukqpq55cb9.apps.googleusercontent.com', 
  offlineAccess: true, 
  // hostedDomain: '', // specifies a hosted domain restriction
  // forceCodeForRefreshToken: true, 
  // accountName: '', 
  // iosClientId: '<FROM DEVELOPER CONSOLE>', 
  // googleServicePlistPath: '', 
  // openIdRealm: '',
  // profileImageSize: 120,
    })
  }, [])

  const GoogleLogin = async () => {
    console.log("1")
      await GoogleSignin.hasPlayServices();
      console.log("2")
      const userInfo = await GoogleSignin.signIn();
      console.log("3");
      console.log("user Info", userInfo);
  };

  return (

    
    
    <View style={styles.pos}>
      <View style={{backgroundColor:'#900000',alignContent:'center',alignItems:'center',paddingTop:30,paddingBottom:30,paddingEnd:10,paddingLeft:10,}}>
     <Image style={{justifyContent:'center',alignContent:'center',alignItems:'center',}} source={require('./Images/icon.png')} />  
   <GoogleSigninButton 
style={styles.container}
size={GoogleSigninButton.Size.Wide}
color={GoogleSigninButton.Color.Light}
onPress={GoogleLogin}/>
</View>
  

 </View>
   
 
);
};

const styles = StyleSheet.create({
  container:{
   
    
    height:70,
    alignItems:'center',
          alignContent:'center',
    
    
      },
      bg:{
        
        flexDirection:'column',
        justifyContent:'center',
        },
        pos:{
         
          flex:1,
          alignContent:'center',
          alignItems:'center',
          justifyContent:'center',
          backgroundColor:'#27233B',
        },
});
export default App;
