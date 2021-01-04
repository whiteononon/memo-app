import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import CircleButton from '../components/CircleButton';

const MemoEditScreen = (props) => {
  const { navigation } = props;
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput value="買い物リスト" multiline style={styles.input} />
      </View>
      <CircleButton
        name="check"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});

export default MemoEditScreen;
