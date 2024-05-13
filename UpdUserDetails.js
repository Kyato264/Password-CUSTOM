import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './ExtStyleSheet'; //Stylesheet

//mostly copied from setuser details 
export default function UpdateUserDetailsScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem('username');
      const storedPassword = await AsyncStorage.getItem('password');

      if (storedUsername !== null && storedPassword !== null) {
        setUsername(storedUsername);
        setPassword(storedPassword);
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const updateUserDetails = async () => {
    try {
      if (username.trim() === '' || password.trim() === '') {
        console.error('Error', 'Please enter both username and password');
        return;
      }

      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);

      Alert.alert('Success', 'User details updated successfully');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error updating user details:', error);
    }
  };

  return (
    <ImageBackground source={require('./assets/backgroundtest3.png')} style={styles.background}>
    <View style={styles.container}>
      <Text style={styles.title}>Update User Details</Text>
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
      <TouchableOpacity style={styles.button} onPress={updateUserDetails}>
        <Text style={styles.buttonText}>Update Details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PasswordsMain')}>
        <Text style={styles.buttonText}>Menu</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
}

