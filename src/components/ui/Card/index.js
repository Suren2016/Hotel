import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import styles from './styles';
import {GRAY_LIGHT, PLACEHOLDER_GRAY, WHITE} from '../../../constants/styles';
import PropTypes from 'prop-types';

const Card = ({
  containerStyle,
  bottomContent,
  text,
  mainStyle,
  image,
  imageStyle,
  key,
  textStyle,
  price,
  prePayment
}) => {
  return (
    <TouchableOpacity style={mainStyle} activeOpacity={0.6} key={key}>
      <ImageBackground
        style={[styles.container, containerStyle]}
        source={{uri: image}}
        imageStyle={imageStyle}>
        <Text
          style={[
            {marginHorizontal: 12, marginBottom: 10, color: WHITE},
            textStyle,
          ]}
          numberOfLines={2}>
          {text}
        </Text>
      </ImageBackground>
      {bottomContent && (
        <View
          style={{
            height: 105,
            marginHorizontal: 18,
            borderBottomStartRadius: 8,
            borderBottomEndRadius: 8,
            backgroundColor: WHITE,
          }}>
          <Text
            style={{
              color: PLACEHOLDER_GRAY,
              fontSize: 15,
              paddingVertical: 10,
              marginLeft: 15,
            }}>
            Waikiki, 4.1 miles from center
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1}}>
            <View style={{marginLeft: 15, marginTop: 4, flex: 2}}>
              <Text style={{fontSize: 14, fontWeight: '600', marginRight: 16 }}>Ocean View 1 king Beg Bed</Text>
              <Text style={{fontSize: 14, fontWeight: '600'}}>{prePayment}</Text>
            </View>
            {price && <Text style={{marginRight: 16, marginTop: 20, textAlign: 'right', fontSize: 24, fontWeight: '800', }}>{`$ ${price}`}</Text>}
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

Card.prototype = {
  containerStyle: PropTypes.object,
  bottomContent: PropTypes.bool,
};

export default Card;
