import React from 'react';
import {
    StyleSheet, View, Text, TextInput, TouchableOpacity
} from 'react-native';
import axios from 'axios';
export default class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    render() {
        return (
            <View style={styles.regform}>
                <Text style={styles.header}>Registration</Text>

                <TextInput style={styles.textinput} placeholder="Email"
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email} underlineColorAndroid={'transparent'}></TextInput>

                {/* securetextentry to ensure you dont see the pw */}
                <TextInput style={styles.textinput} placeholder="Password"
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password} secureTextEntry={true} underlineColorAndroid={'transparent'}></TextInput>

                <TouchableOpacity style={styles.button} onPress={this.add}>
                    <Text style={styles.btnText} >Sign up</Text>
                </TouchableOpacity>
            </View>
        )
    }
    //add a new user
    add = () => {
        const reg_data = JSON.stringify({
            email: this.state.email,
            password: this.state.password
        });
        const url = "http://192.168.10.2:3000/api/signup/";
        // axios.post(url, {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Access-Control-Allow-Origin': '*'
        //     }
        // }, reg_data
        // )
        axios.post(url, {} /* <-- this guy */, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            params: reg_data
        })
            .then(function (response) {
                if (response.status == 200) {
                    return response.text();
                }
                else {
                    throw new Error("wrong");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        this.setState({
            email: '',
            password: ''
        });
    }
}


const styles = StyleSheet.create({
    regform: {
        alignSelf: 'stretch',
    },
    header: {
        fontSize: 24,
        color: 'black',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1,
    },
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: 'black',
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
