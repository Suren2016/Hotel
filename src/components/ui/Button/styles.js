import {StyleSheet} from 'react-native';
import {SHADOW, WHITE} from '../../../constants/styles';

export default StyleSheet.create({
  signInTouch: {
    marginTop: 42,
    marginHorizontal: 0,
    shadowColor: SHADOW,
    shadowOffset: {
      width: 10,
      height: 20,
    },
    shadowOpacity: 20,
    shadowRadius: 15,

    elevation: 2,
  },
  gradient: {
    padding: 0,
    borderRadius: 10,
  },
  signInText: {
    // fontFamily: 'Nunito-ExtraBold',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: WHITE,
    marginHorizontal: 20,
    marginVertical: 14,
  },
});
