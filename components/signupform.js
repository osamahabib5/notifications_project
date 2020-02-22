import React from 'react';
import {
    StyleSheet, View, Text, TextInput, TouchableOpacity
} from 'react-native';
import axios from 'axios';
export default class SignupForm extends React.Component {
    constructor(props) {
        super(props)
        this.state({
            name: '',
            email: '',
            password: ''
        })
    }
    render() {
        return (
            <View style={styles.regform}>
                <Text style={styles.header}>Registration</Text>
                <TextInput style={styles.textinput} placeholder="Your Name"
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name} underlineColorAndroid={'transparent'}></TextInput>

                <TextInput style={styles.textinput} placeholder="Email"
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email} underlineColorAndroid={'transparent'}></TextInput>

                {/* securetextentry to ensure you dont see the pw */}
                <TextInput style={styles.textinput} placeholder="Password"
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password} secureTextEntry={true} underlineColorAndroid={'transparent'}></TextInput>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnText} onPress={this.add}>Sign up</Text>
                </TouchableOpacity>
            </View>
        )
    }

    //add a new user
    add = () => {
        const reg_data = JSON.stringify({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        });
        const url = "http://192.168.10.12:3000/api/signup";
        axios.post(url, reg_data).then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
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
