import React from 'react';
import {
  StyleSheet, View, Text, TextInput,
} from 'react-native';
import AppBar from '../components/AppBar';
import Button from '../components/Button';

const LoginScreen = () => (
  <View style={styles.container}>
    <AppBar />
    <View style={styles.inner}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} value="email" />
      <TextInput style={styles.input} value="password" />
      <Button label="Submit" />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Not Register?</Text>
        <Text style={styles.footerLink}>Sign up here!</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    paddingBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#000000',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    marginBottom: 16,
  },

  footer: {
    flexDirection: 'row',
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467fd3',
  },
});

export default LoginScreen;
