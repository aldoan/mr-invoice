import React, {useState} from 'react';
import SplashScreen from  "react-native-splash-screen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image
} from 'react-native';

const Stack = createNativeStackNavigator();


function HomeScreen() {
  const [code, onChangeCode] = React.useState("");
  const [email, onChangeEmail] = React.useState(null);
  const [password, onChangePassword] = React.useState("");
  const [passwordVisible, setPasswordVisible] = useState(true);

  return (
    <View style={styles.login}>
        <View style={styles.logoContainer}>
          <Image source={require('./assets/img/app_logo.png')} style={styles.logo} />
        </View>
        <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="#000000"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeCode}
          value={code}
          placeholder="Company Code"
          keyboardType="numeric"
          placeholderTextColor="#000000"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          
          placeholder="Password"
          placeholderTextColor="#000000"
          secureTextEntry={passwordVisible}
          textContentType='password'
          right={}
        />

        </View>
    </View>
  );
}

function App(){
  React.useEffect(() => {
    SplashScreen.hide();
  });


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginHorizontal:24,
    marginTop:12,
    borderWidth: 1,
    padding: 10,
    width:'100%',
    borderRadius:10,
    borderColor:'#DFE1E5',

  },

formContainer:{
  paddingHorizontal:24,
  paddingTop:50,
  borderTopRightRadius:30,
  borderTopLeftRadius:30,
  backgroundColor:'white',
  width:'100%',
  alignItems:'center',
  flex:3
},
logo:{
  width:245,
  height:105
},
logoContainer:{
  marginTop:60
},
login:{
  flex:1,
  alignItems: 'center', 
  justifyContent: 'center'
}
});