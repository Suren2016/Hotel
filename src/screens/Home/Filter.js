// @ts-nocheck
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import HeaderView from '../../components/ui/HeaderView/index';
import {
  GRAY_LIGHT,
  PLACEHOLDER_GRAY,
  SWITCH_OFF,
  GRADIENT_DARK,
  GRADIENT_MIDDLE,
  RED_SHADOW,
} from '../../constants/styles';
import Button from '../../components/ui/Button/index';

import BackArrowIcon from '../../resources/svg/left_black_arrow_icon.svg';
import RightArrowIcon from '../../resources/svg/arrow_right_grey_icon.svg';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import {useState} from 'react/cjs/react.development';

const Filter = ({navigation}) => {
  const [breakfastSwitch, setBreakfastSwitch] = useState(false);
  const [hasPrepayment, setHasPrepayment] = useState(false);

  const onReset = () => {
    setBreakfastSwitch(false);
    setHasPrepayment(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <HeaderView
          icon={<BackArrowIcon />}
          title="Filter"
          rightTitle="RESET"
          onPressLeft={() => navigation.navigate('Home')}
          onPressRight={onReset}
          leftTitleStyle={styles.leftTitle}
          leftContainerStyle={styles.leftContainer}
          rightContainerStyle={styles.rightContainer}
          rightTitleStyle={styles.rightTitle}
        />
        <View style={styles.divider} />
        <View style={styles.container}>
          <Text style={styles.leftText}>Your Buget</Text>
          <TouchableOpacity style={styles.selectTouch}>
            <Text style={styles.selectText}>Select</Text>
            <RightArrowIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={styles.leftText}>Star Rating</Text>
          <TouchableOpacity style={styles.selectTouch}>
            <Text style={styles.selectText}>Select</Text>
            <RightArrowIcon />
          </TouchableOpacity>
        </View>
        <View style={[styles.container, {marginTop: 32}]}>
          <Text style={styles.leftText}>Breakfast Included</Text>
          <Switch
            value={breakfastSwitch}
            onChange={() => setBreakfastSwitch((prev) => !prev)}
            ios_backgroundColor={SWITCH_OFF}
            trackColor={{false: SWITCH_OFF, true: RED_SHADOW}}
            onTintColor={() => (
              <LinearGradient
                colors={[GRADIENT_DARK, GRADIENT_MIDDLE, RED_SHADOW]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}></LinearGradient>
            )}
          />
        </View>
        <View style={[styles.container, {marginTop: 34}]}>
          <Text style={styles.leftText}>No prepayment</Text>
          <Switch
            value={hasPrepayment}
            onChange={() => setHasPrepayment((prev) => !prev)}
            ios_backgroundColor={SWITCH_OFF}
            trackColor={{false: SWITCH_OFF, true: GRADIENT_MIDDLE}}
          />
        </View>
      </View>

      <Button
        title="Apply"
        onPress={() => navigation.navigate('Home')}
        btnStyle={styles.button}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 22,
    marginTop: 28,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  colors: {
    color: GRADIENT_MIDDLE,
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  leftTitle: {
    color: 'black',
    fontSize: 28,
    fontWeight: '600',
    marginLeft: 24,
  },
  leftContainer: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    marginLeft: -8,
  },
  rightContainer: {
    backgroundColor: GRAY_LIGHT,
    borderRadius: 10,
  },
  rightTitle: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  divider: {
    height: 1,
    backgroundColor: GRAY_LIGHT,
    marginTop: 13,
  },
  selectTouch: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  selectText: {
    marginRight: 14,
    fontSize: 20,
    fontWeight: '400',
    color: PLACEHOLDER_GRAY,
  },
  leftText: {
    fontSize: 20,
    fontWeight: '600',
  },
  button: {
    marginHorizontal: 18,
    marginBottom: ifIphoneX(12, 24),
  },
});

export default React.memo(Filter);
