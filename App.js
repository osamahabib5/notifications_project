
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

//import Login from './pages/Login';
import axios from 'axios';
//import routes from './Routed';
// const temail = "osama";
// const tpassword = "osama";
export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', response: "Hello world" }
    this._onChangeEmail = this._onChangeEmail.bind(this)     //binding these components
    this._onChangePassword = this._onChangePassword.bind(this)
  }


  _onChangeEmail(email) {
    this.setState(Object.assign({}, state, { email })); // good practice for immutability
  }

  _onChangePassword(password) {
    this.setState(Object.assign({}, state, { password })); // good practice for immutability
  }



  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed " + viewId);

  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>{this.state.response}</Text>
        </View>
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
          onPress={this.connect}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
          <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
          <Text>Register</Text>
        </TouchableHighlight>


      </View>


    );
  }


  connect = () => {
    const url = "http://192.168.10.3:3000/api/add";
    const email_data = {
      email: "osama.habib@yahoo.com"
    }
    axios.post(url, email_data).then(res => console.log(res.data));
    // fetch(url).then(response => {
    //   if (response.status == 200) {
    //     return response.text();
    //   }
    //   else {
    //     throw new Error("wrong");
    //   }
    // }).then(responseText => {
    //   this.setState({ response: responseText });
    // }).catch(error => {
    //   console.error(error.message);
    // });
  }




  validation = () => {
    this.state.email === temail && this.state.password === tpassword ? Alert.alert('', 'Login Successful') :
      Alert.alert('', 'Incorrect Email or password');
  }

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

