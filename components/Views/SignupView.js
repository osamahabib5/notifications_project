import React from 'react';
import {
    StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView
} from 'react-native';
import axios from 'axios';
export default class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            mobile_number: ''
        }
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.regform}>
                    <Text style={styles.header}>SignUp</Text>
                    <TextInput style={styles.textinput} placeholder="Email"
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email} underlineColorAndroid={'transparent'}></TextInput>

                    {/* securetextentry to ensure you dont see the pw */}
                    <TextInput style={styles.textinput} placeholder="Password"
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password} secureTextEntry={true} underlineColorAndroid={'transparent'}></TextInput>

                    <TextInput style={styles.textinput} placeholder="Mobile Number"
                        onChangeText={(mobile_number) => this.setState({ mobile_number })}
                        value={this.state.mobile_number} underlineColorAndroid={'transparent'} keyboardType="number-pad"></TextInput>

                    <TouchableOpacity style={styles.button} onPress={this.add}>
                        <Text style={styles.btnText} >Sign up</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={this.add}>
                        <Text style={styles.btnText} >Back</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
    //add a new user
    add = () => {
        const email_check = this.checkemail(this.state.email);
        const number_check = this.checknumber(this.state.mobile_number);
        if (this.state.email != "" && this.state.password != "" && this.state.mobile_number != "") {
            if (email_check && number_check) {
                const reg_data = {
                    email: this.state.email,
                    password: this.state.password,
                    mobile_number: this.state.mobile_number
                };
                const url = "http://192.168.10.4:3000/api/signup/";
                axios.post(url,
                    reg_data)
                    .then(response => {
                        alert(response.data);
                    });
            }
            else {
                if (!email_check) {
                    alert("Invalid Email inserted!");
                }
                else {
                    alert("The mobile number field should only contain numbers.");
                }
            }
        }
        else {
            alert("Please fill all the fields.");
        }
        this.setState({
            email: '',
            password: '',
            mobile_number: ''
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

    //check if mobile number is valid
    checknumber = (check_number) => {
        if (!isNaN(check_number)) {
            return true;
        }
        alert("Only numbers should be inserted!");
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
        alignSelf: 'baseline',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#59cbbd',
        marginTop: 30,
        width: 250,
        marginLeft: 60,
        borderRadius: 30
    }
})
