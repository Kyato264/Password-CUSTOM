import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, Text, View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './ExtStyleSheet';
import { ScrollView } from 'react-native-web';


export default function PasswordViewer({ navigation }) {
    const [passwords, setPasswords] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            //DONT TOUCH OR I WILL SMITE YOU
            const response = await fetch("http://localhost/PasswordDBConnection/getPasswords.php");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setPasswords(data);
        } catch (error) {
            console.error("There was a problem with the fetch operation:", error);
        }
    };

    const renderPasswordItem = ({ item }) => (
        <View style={styles.card}>
            <Text>Type: {item.Type}</Text>
            <Text>Short Name: {item.ShortName}</Text>
            <Text>Website: {item.Website}</Text>
            <Text>Required Name: {item.RequiredName}</Text>
            <Text>Used Password: {item.UsedPassword}</Text>
        </View>
    );

    return (
        <ImageBackground source={require('./assets/backgroundtest3.png')} style={styles.background}>
            <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={styles.main}>
                    <Text style={styles.title}>PASSWORD VIEWER</Text>
                    <FlatList
                        style={styles.list}
                        data={passwords}
                        renderItem={renderPasswordItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PasswordsMain')}>
                    <Text style={styles.buttonText}>Menu</Text>
                </TouchableOpacity>
            </SafeAreaView>
            </ScrollView>
        </ImageBackground>
    );
}


