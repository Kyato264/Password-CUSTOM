import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

//i gotta do something about this ones stylesheet, its the one the externalstylehseet is based off of so it could MAYBE be imported directly
//ill do that tmr(technically ltr today its literally 2:59 AM)

export default function PasswordsMain({ navigation }) {
    return (
        <ImageBackground source={require('./assets/background2.png')} style={styles.background}>
            <View style={styles.container}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.plainText}>Menu</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PasswordViewer')}>
                        <Text style={styles.buttonText}>Go to Password Viewer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UpdUserDetails')}>
                        <Text style={styles.buttonText}>Go Update User Details</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PasswordGen')}>
                        <Text style={styles.buttonText}>Go to Generate Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PasswordMake')}>
                        <Text style={styles.buttonText}>Go to Make New Password</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        padding: 20,
        height: '100%',
        width: '100%',
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    button: {
        backgroundColor: '#5F0126',
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        borderRadius: 15,
        width: '70%', // Adjusted width for better UI
    },
    buttonText: {
        color: 'white', // Changed text color to white
        fontSize: 18, // Changed font size for better readability
    },
    plainText: {
        color: '#5F0126',
        paddingLeft: 10,
        paddingTop: 10,
        fontSize: 30,
    },
});
