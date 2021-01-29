import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HotelGallery = () => {
  return (
    <View style={styles.container}>
      <Text>HotelGalleryScreen</Text>
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

export default React.memo(HotelGallery);
