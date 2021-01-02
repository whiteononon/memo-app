import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { string, bool, shape } from 'prop-types';

const Hello = (props) => {
  const { children, bang, style } = props;
  return (
    <View style={styles.container}>
      <Text style={[styles.text, style]}>
        {`Hello ${children}${bang ? '!' : '?'}`}
      </Text>
    </View>
  );
};

Hello.propTypes = {
  children: string.isRequired,
  bang: bool,
  style: shape(),
};

Hello.defaultProps = {
  bang: false,
  style: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
    backgroundColor: 'blue',
    padding: 20,
  },
});

export default Hello;
