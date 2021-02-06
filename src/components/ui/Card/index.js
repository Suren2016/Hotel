import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './styles';
import {GRAY_LIGHT, WHITE} from '../../../constants/styles';
import PropTypes from 'prop-types';

const index = ({containerStyle, bottomContent}) => {
  return (
    <>
      <View style={[styles.container, containerStyle]}>
        <Text>asdkjfgak</Text>
      </View>
      {bottomContent && (
        <View
          style={{
            height: 105,
            marginHorizontal: 18,
            borderBottomStartRadius: 8,
            borderBottomEndRadius: 8,
            backgroundColor: WHITE,
            borderWidth: 1,
          }}>
          <Text>Bottom</Text>
        </View>
      )}
    </>
  );
};

index.prototype = {
  containerStyle: PropTypes.object,
  bottomContent: PropTypes.bool,
};

export default index;
