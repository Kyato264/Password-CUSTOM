import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './ExtStyleSheet';


//idk what to do with this page tbh, may make another screen that it sends you to so that login can get a grasp on the stupid async storage stuff
//or make a button appear that sends you back to login after being press,ed it would allow you to set your user details multiple times at least

export default function SetUserDetailsScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const saveUserDetails = async () => {
    try {
      if (username.trim() === '' || password.trim() === '') {
        Alert.alert('Error', 'Please enter both username and password');
        return;
      }

      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);

      Alert.alert('Success', 'User details saved successfully');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error saving user details:', error);
      Alert.alert('Error', 'Failed to save user details');
    }
  };

  return (
    <ImageBackground source={require('./assets/background2.png')} style={styles.background}>
    <View style={styles.container}>
    <Text style={styles.plainText}>Set User Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Save Details" onPress={saveUserDetails} style={styles.button} />
    </View>
    </ImageBackground>
  );
}