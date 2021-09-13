import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {Link} from 'react-router-native';


export default function LoginForm() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.welcome}>Login To The App Here</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <StatusBar style="auto" />
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => alert("Login Event")}
          style={styles.userButton}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert("Signup Event")}
          style={styles.userButton}
        >
          <Link to='/register'>
            <Text>Sign Up</Text>
          </Link>
        </TouchableOpacity>
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    color: '#000',
    padding: 15
  },
  input : {
    backgroundColor: '#fff',
    marginBottom: 10,
    textAlign: 'center',
    padding: 15
  },
  userButton : {
    backgroundColor: '#fff',
    marginBottom: 10,
    textAlign: 'center',
    padding: 15
  },
});
