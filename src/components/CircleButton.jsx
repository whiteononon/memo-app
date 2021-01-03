import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { shape, string, func } from 'prop-types';
import { Feather } from '@expo/vector-icons';

const CircleButton = (props) => {
  const { style, name, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.circleButton, style]}>
      <Feather
        style={styles.circleButtonLabel}
        name={name}
        size={32}
        color="white"
      />
    </TouchableOpacity>
  );
};

CircleButton.propTypes = {
  style: shape(),
  name: string.isRequired,
  onPress: func,
};

CircleButton.defaultProps = {
  style: null,
  onPress: null,
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#467fd3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
});

export default CircleButton;
