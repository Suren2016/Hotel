import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FilterScreen = () => {
  return (
    <View style={styles.container}>
      <Text>FilterScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(FilterScreen);