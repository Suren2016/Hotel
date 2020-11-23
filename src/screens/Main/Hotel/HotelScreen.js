import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HotelScreen = () => {
  return (
    <View style={styles.container}>
      <Text>React.memo(HotelScreen)</Text>
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

export default React.memo(HotelScreen);
