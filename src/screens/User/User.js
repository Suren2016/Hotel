import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
  Image,
} from 'react-native';

// @ts-ignore
import HelpIcon from '../../resources/svg/help_icon.svg';
// @ts-ignore
import TermsIcon from '../../resources/svg/terms_icon.svg';
// @ts-ignore
import PrivacyIcon from '../../resources/svg/privacy_icon.svg';
// @ts-ignore
import LogoutIcon from '../../resources/svg/logout_icon.svg';
import {GRAY_LIGHT, WHITE} from '../../constants/styles';

const User = ({navigation}) => {
  const handleURL = (url) => {
    Linking.openURL(url);
  };

  const checkLogout = () => {
    Alert.alert('Are You sure?', '', [
      {text: 'OK', onPress: () => navigation.popToTop()},
      {text: 'Cancel', onPress: () => {}},
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.nameTitleContainer}>
        <Image
          style={styles.userImage}
          // @ts-ignore
          source={require('../../resources/user_Image.png')}
        />
        <Text style={styles.userName}>Suren Abrahamyan</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.body}>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => handleURL('https://google.ru')}>
          <HelpIcon />
          <Text style={styles.textBottomSpace}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => handleURL('https://hotels.com')}>
          <TermsIcon />
          <Text style={styles.textBottomSpace}>Term of use</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => handleURL('https://hotels.com')}>
          <PrivacyIcon />
          <Text style={styles.textBottomSpace}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.touch, {marginTop: 20}]}
          onPress={checkLogout}>
          <LogoutIcon />
          <Text style={styles.textBottomSpace}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  textBottomSpace: {
    marginLeft: 14,
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 2,
  },
  nameTitleContainer: {
    height: 82,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
    marginHorizontal: 0,
    paddingHorizontal: 18,
  },
  userName: {
    fontSize: 22,
    fontWeight: '700',
    marginLeft: 20,
  },
  body: {
    marginHorizontal: 26,
    marginTop: 40,
    alignSelf: 'stretch',
  },
  userImage: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  touch: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
  },
  divider: {
    height: 1,
    backgroundColor: GRAY_LIGHT,
  },
});
export default React.memo(User);
