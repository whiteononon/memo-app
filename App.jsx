import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Hello from './src/components/Hello';

const App = () => (
  <View style={styles.container}>
    <Hello bang={false}>World</Hello>
    <Hello bang={false} style={{ fontSize: 10 }}>
      World
    </Hello>
    {/* eslint-disable-next-line react/style-prop-object */}
    <StatusBar style="auto" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
