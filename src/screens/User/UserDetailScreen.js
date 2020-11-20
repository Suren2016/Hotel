import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const UserDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text>UserDetailScreen</Text>
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
export default React.memo(UserDetailScreen);
