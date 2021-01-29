import React from 'react';
import {View, Text, TouchableOpacity, ViewPropTypes} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types'

import styles from './styles'
import {GRADIENT_DARK, GRADIENT_MIDDLE, GRAY_LIGHT} from '../../../constants/styles'


const index = ({title, onPress, btnStyle}) => {
  return (
    <TouchableOpacity style={[styles.signInTouch, {...btnStyle}]} activeOpacity={0.6} onPress={onPress}>
      <LinearGradient
        style={styles.gradient}
        colors={[GRADIENT_DARK, GRADIENT_MIDDLE, GRAY_LIGHT]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text style={styles.signInText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

index.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  btnStyle: PropTypes.object,
}

export default React.memo(index);
