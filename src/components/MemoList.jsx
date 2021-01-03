import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const MemoList = () => (
  <View>
    <View style={styles.memoListItem}>
      <View>
        <Text style={styles.memoListItemTitle}>買い物リスト</Text>
        <Text style={styles.memoListItemDate}>2020年12月24日 10:00</Text>
      </View>
      <View style={styles.memoListItemDeleteButton}>
        <Text>X</Text>
      </View>
    </View>

    <View style={styles.memoListItem}>
      <View>
        <Text style={styles.memoListItemTitle}>買い物リスト</Text>
        <Text style={styles.memoListItemDate}>2020年12月24日 10:00</Text>
      </View>
      <View style={styles.memoListItemDeleteButton}>
        <Text>X</Text>
      </View>
    </View>

    <View style={styles.memoListItem}>
      <View>
        <Text style={styles.memoListItemTitle}>買い物リスト</Text>
        <Text style={styles.memoListItemDate}>2020年12月24日 10:00</Text>
      </View>
      <View style={styles.memoListItemDeleteButton}>
        <Text>X</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
  memoListItemDeleteButton: {
    justifyContent: 'center',
  },
});

export default MemoList;
