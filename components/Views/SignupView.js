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
                <Text style={styles.header}>SignUp</Text>

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
        const email_check = this.checkemail(this.state.email);
        if (this.state.email != "" && this.state.password != "") {
            if (email_check) {
                const reg_data = {
                    email: this.state.email,
                    password: this.state.password
                };
                const url = "http://192.168.10.3:3000/api/signup/";

                axios.post(url,
                    reg_data)
                    .then(response => {
                        alert(response);
                    });


            }
            else {
                alert("Invalid Email Inserted.");
            }
        }
        else {
            alert("Please fill all the fields.");
        }
        this.setState({
            email: '',
            password: ''
        });
    }

    //check if email is valid
    checkemail = (check_email) => {
        if (check_email.includes('@') && check_email.includes('.com')) {
            return true;
        }
        alert("Invalid Email Inserted");
        return;
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
