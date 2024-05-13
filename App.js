import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Keyboard, Alert, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PasswordsMain from './PasswordsMain';
import PasswordViewer from './PasswordViewer';
import SetUserDetails from './SetUserDetails';
import UpdUserDetails from './UpdUserDetails';
import PasswordGen from './PasswordGen';
import PasswordMake from './PasswordMake';
import styles from './MainStyleSheet';

//alert isnt working so dont use it, just console error and check there
//login screen doesnt fit on mobile at the moment, mainly because its following a different stylesheet, will fix.(i think)

//i need to get better at this commenting thing



const Stack = createNativeStackNavigator();


export default function App() {
  //navigator dont touch
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="PasswordsMain" component={PasswordsMain} />
        <Stack.Screen name="PasswordViewer" component={PasswordViewer} />
        <Stack.Screen name="SetUserDetails" component={SetUserDetails} />
        <Stack.Screen name="UpdUserDetails" component={UpdUserDetails} />
        <Stack.Screen name="PasswordGen" component={PasswordGen} />
        <Stack.Screen name="PasswordMake" component={PasswordMake}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userDetailsExist, setUserDetailsExist] = useState(true);

  useEffect(() => {
    checkUserDetails();
  }, []);

  useFocusEffect( 
    React.useCallback(() => {
      checkUserDetails();
    }, [])
  );

  const checkUserDetails = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem('username');
      const storedPassword = await AsyncStorage.getItem('password');
      if (storedUsername) {
        setUsername(storedUsername);
      }
      if (!storedUsername || !storedPassword) {
        setUserDetailsExist(false);
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const loginAttempt = async () => {
    try {
      const storedPassword = await AsyncStorage.getItem('password');
      console.log('Stored Password:', storedPassword);
      console.log('Entered Password:', password);
  
      if (!storedPassword) {
      } else if (password === storedPassword) {
        console.log('Navigating to PasswordsMain');
        navigation.navigate('PasswordsMain');
      } else {
        console.log('Incorrect Password');
      }
    } catch (error) {
      console.error('Error checking password:', error);
    }
  };

  const resetUserDetails = async () => {
    try {
      await AsyncStorage.removeItem('username');
      await AsyncStorage.removeItem('password');
      setUsername('');
      setPassword('');
      setUserDetailsExist(false);
    } catch (error) {
      console.error('Error resetting user details:', error);
    }
  };

  if (!userDetailsExist) {
    navigation.navigate('SetUserDetails');
    return null;
  }
    //Main screen stuff
  return (
    <ImageBackground source={require('./assets/backgroundtest4.png')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('./assets/logo3.png')} style={styles.logo} />
        <View style={styles.box}>
          <Text style={styles.title}>PASS-IT</Text>
          <StatusBar style="auto" />  

          <Text style={styles.plainText}>Welcome {username}</Text>

          <Text style={styles.plainText}>Password: </Text>
          <TextInput
            style={styles.loginInfo}
            value={password}
            onChangeText={setPassword}
            keyboardType="visible-password"
            secureTextEntry
            onBlur={dismissKeyboard}
          />

          <TouchableOpacity onPress={loginAttempt} style={styles.button}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>

          {!userDetailsExist && (
            <TouchableOpacity onPress={() => navigation.navigate('SetUserDetails')} style={styles.button}>
              <Text style={styles.buttonText}>Set User Details</Text>
            </TouchableOpacity>
          )}

        </View>
      </View>
    </ImageBackground>
  );
}


