import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const index = () => {
  return (
    <View style={styles.container}>
      <Text>index</Text>
    </View>
  );
};

export default React.memo(index);
