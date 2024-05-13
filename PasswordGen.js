import React, { useState } from 'react';
import { StyleSheet, ImageBackground, Text, View, TouchableOpacity } from 'react-native';
import styles from './ExtStyleSheet'; //Stylesheet

export default function PasswordGen({ navigation }) {
    const [password, setPassword] = useState('');

    //https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
    const makeid = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }

    const handleGeneratePassword = () => {
        const generatedPassword = makeid(12);
        setPassword(generatedPassword);
    };

    return (
        <ImageBackground source={require('./assets/background2.png')} style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.plainText}>PASSWORD GENERATOR</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PasswordsMain')}>
                    <Text style={styles.buttonText}>Menu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleGeneratePassword}>
                    <Text style={styles.buttonText}>Generate Password</Text>
                </TouchableOpacity>
                <Text selectable={true}>{password}</Text>
            </View>
        </ImageBackground>
    );
}
