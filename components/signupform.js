import React from 'react';
import {
    StyleSheet, View, Text, TextInput, TouchableOpacity
} from 'react-native';

export default class SignupForm extends React.Component {
    render() {
        return (
            <View style={styles.regform}>
                <Text style={styles.header}>Registration</Text>
                <TextInput style={styles.textinput} placeholder="Your Name"
                    underlineColorAndroid={'transparent'}></TextInput>

                <TextInput style={styles.textinput} placeholder="Email"
                    underlineColorAndroid={'transparent'}></TextInput>

                {/* securetextentry to ensure you dont see the pw */}
                <TextInput style={styles.textinput} placeholder="Password"
                    secureTextEntry={true} underlineColorAndroid={'transparent'}></TextInput>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnText}>Sign up</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    regform: {
        alignSelf: 'stretch',
    },
    header: {
        fontSize: 24,
        color: '#ffff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1,
    },
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 30,
    }
})
