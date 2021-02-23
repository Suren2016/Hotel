import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import PropTypes from 'prop-types';

const index = ({
  style,
  title,
  rightTitle,
  leftTitle,
  icon,
  leftTitleStyle,
  rightContainerStyle,
  leftContainerStyle,
  rightTitleStyle,
  onPressLeft,
  onPressRight,
}) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 18,
          marginTop: 20
        },
        style,
      ]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity style={[{flexDirection: 'row'}, leftContainerStyle]} onPress={onPressLeft}>
          {icon}
          {leftTitle && (
            <Text style={[{marginLeft: 8}, leftTitleStyle]}>{leftTitle}</Text>
          )}
        </TouchableOpacity>
        {!leftTitle && (
          <Text style={[{marginLeft: 8}, leftTitleStyle]}>{title}</Text>
        )}
      </View>

      <TouchableOpacity style={rightContainerStyle} onPress={onPressRight}>
        <Text style={rightTitleStyle}>{rightTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

index.prototype = {
  style: PropTypes.object,
  onPressLeft: PropTypes.func,
  onPressRight: PropTypes.func,
  title: PropTypes.string,
  leftTitle: PropTypes.string,
  rightTitle: PropTypes.string,
  icon: PropTypes.any,
  leftTitleStyle: PropTypes.object,
  rightContainerStyle: PropTypes.object,
  rightTitleStyle: PropTypes.object,
  leftContainerStyle: PropTypes.object,
};

export default index;
