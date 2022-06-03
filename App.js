import React from 'react';
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
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View>
          <Image source={require('./assets/img/app_logo.png')} />
        </View>
        <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email"
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeCode}
          value={code}
          placeholder="Company Code"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
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
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width:240,
    borderRadius:10,
    borderColor:'#DFE1E5',

  },
});