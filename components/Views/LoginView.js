

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert, AppRegistry, Navigator, TouchableOpacity
} from 'react-native';
export default class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '', password: '', imageUrl: ''
        }

    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: "http://192.168.10.3:3000" + this.state.imageUrl }}
                    style={{
                        width: 100,
                        height: 100
                    }}
                />
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/message/ultraviolet/50/3498db' }} />
                    <TextInput style={styles.inputs}
                        name="email"
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        //onChangeText={this._onChangeEmail}     //passing to user components as props
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        //onChangeText={this._onChangePassword}    //passing to user components as props
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password} />
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}
                    onPress={this.validatelogin}
                >
                    <Text style={styles.loginText}>Login</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonContainer} >
                    <Text>Forgot your password?</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonContainer}
                    onPress={() => navigate('SignUp')}>
                    <Text>Register</Text>
                </TouchableHighlight>



            </View>


        );
    }

    //validate email and password
    validatelogin = () => {
        const email_data = JSON.stringify({
            email: this.state.email,
            password: this.state.password
        });
        const url = "http://192.168.10.3:3000/api/verifylogin?data=" + email_data + "";

        fetch(url)
            .then(response => {
                if (response.status == 200) {
                    return response.text();
                }
                else {
                    throw new Error("wrong");
                }
            }).then(responseText => {
                this.setState({
                    imageUrl: responseText
                })
            }).catch(error => {
                console.error(error.message);
            });
        this.setState({
            email: '',
            password: ''
        })
    }

    //signupform
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    loginText: {
        color: 'white',
    }
});
