import React, { useState } from 'react';
import { StyleSheet, ImageBackground, Text, View, SafeAreaView, Keyboard, TextInput, TouchableOpacity } from 'react-native';
import {Picker} from "@react-native-picker/picker";
import styles from './ExtStyleSheet';

//thank mam for allowing us to bassically use her code and do some changes to it for this to work
export default function PasswordMake({ navigation }) {
  const [Type, setType] = useState('');
  const [ShortName, setShortName] = useState('');
  const [Website, setWebsite] = useState('');
  const [RequiredUsername, setRequiredUsername] = useState('');
  const [UsedPassword, setUsedPassword] = useState('');

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('Type', Type);
    formData.append('ShortName', ShortName);
    formData.append('Website', Website);
    formData.append('RequiredUsername', RequiredUsername);
    formData.append('UsedPassword', UsedPassword);

    fetch('http://localhost/PasswordDBConnection/sendPasswords.php', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          alert('Data saved successfully');
        }
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });

    setType('');
    setShortName('');
    setWebsite('');
    setRequiredUsername('');
    setUsedPassword('');
  };

  return (
    <ImageBackground source={require('./assets/background2.png')} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Type:</Text>
            <Picker
              style={styles.picker}
              selectedValue={Type}
              onValueChange={(itemValue,) => setType(itemValue)}
            >
              <Picker.Item label="Online Service" value="Online Service" />
              <Picker.Item label="Device" value="Device" />
            </Picker>
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>ShortName:</Text>
            <TextInput
              style={styles.input}
              value={ShortName}
              onChangeText={(text) => setShortName(text)}
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Website:</Text>
            <TextInput
              style={styles.input}
              value={Website}
              onChangeText={(text) => setWebsite(text)}
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Required Username:</Text>
            <TextInput
              style={styles.input}
              value={RequiredUsername}
              onChangeText={(text) => setRequiredUsername(text)}
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Used Password:</Text>
            <TextInput
              style={styles.input}
              value={UsedPassword}
              onChangeText={(text) => setUsedPassword(text)}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PasswordsMain')}>
            <Text style={styles.buttonText}>Menu</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
