import firebase from 'firebase';
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

const temail = "osama";
const tpassword = "osama";
//const variable = email.value;
export default class LoginView extends Component {

  // componentWillMount() {
  //   var firebaseConfig = {
  //     apiKey: "AIzaSyAlPYoAWGqoVWeSl-YQTHTE84nJWQwJyIM",
  //     authDomain: "reactnativeproject-65a35.firebaseapp.com",
  //     databaseURL: "https://reactnativeproject-65a35.firebaseio.com",
  //     projectId: "reactnativeproject-65a35",
  //     storageBucket: "reactnativeproject-65a35.appspot.com",
  //     messagingSenderId: "1021375818192",
  //     appId: "1:1021375818192:web:3b6fba756b9c84e33871d5"
  //   };
  //   // Initialize Firebase
  //   firebase.initializeApp(firebaseConfig);
  // }
  // firebase.database().ref('users/001').set(
  //   {
  //     email: "osama.habib@yahoo.com",
  //     password: "osama"
  //   }
  // ).then(() => {
  //   console.log("Inserted");
  // }).catch((error) => {
  //   console.log(error);
  // });


  constructor(props) {
    super(props);
    this.state = { email: '', password: '' }

  }



  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed " + viewId);

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/message/ultraviolet/50/3498db' }} />
          <TextInput style={styles.inputs}
            name="email"
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid='transparent'

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
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password} />
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} //onPress={() => this.onClickListener('login')}
          onPress={() => this.validation()}
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


  validation = () => {
    this.state.email === temail && this.state.password === tpassword ? Alert.alert('', 'Login Successful') :
      Alert.alert('', 'Incorrect Email or password');
    // ? Alert.alert('', 'Valid') : Alert.alert('', 'Error');
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

