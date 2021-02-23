import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
  GRADIENT_DARK,
  GRADIENT_MIDDLE,
  RED_SHADOW,
} from '../../../constants/styles';

const CustomMarker = ({title}) => {
  return (
    <TouchableOpacity>
      <LinearGradient
        style={{borderRadius: 40}}
        colors={[GRADIENT_DARK, GRADIENT_MIDDLE, RED_SHADOW]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text
          style={{
            color: 'white',
            marginHorizontal: 12,
            marginVertical: 6,
            fontWeight: '800',
            fontSize: 17,
            textAlign: 'center',
          }}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomMarker;
