/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
  GRAY_LIGHT,
  GRADIENT_DARK,
  GRADIENT_MIDDLE,
  WHITE,
} from '../../constants/styles';

const SignInScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Welome Back!</Text>
          <TextInput style={styles.textInput} placeholder="Email Address" />
          <TextInput
            style={[styles.textInput, {marginTop: 12}]}
            placeholder="Password"
          />
          <TouchableOpacity style={styles.signInTouch} activeOpacity={0.6}>
            <LinearGradient
              style={styles.gradient}
              colors={[GRADIENT_DARK, GRADIENT_MIDDLE, GRAY_LIGHT]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Text style={styles.signInText}>Sign In</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomView}>
          <Text style={styles.bottomText}>Don’t have an account? </Text>
          <TouchableOpacity>
            <Text style={[styles.bottomText, {textDecorationLine: 'underline'}]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    marginHorizontal: 18,
    marginVertical: 24,
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  textInput: {
    marginTop: 30,
    marginHorizontal: 0,
    backgroundColor: GRAY_LIGHT,
    // fontFamily: 'Nunito-Regular',
    height: 50,
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
  },
  signInText: {
    // fontFamily: 'Nunito-ExtraBold',
    fontSize: 24,
    textAlign: 'center',
    color: WHITE,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  signInTouch: {
    marginTop: 42,
    marginHorizontal: 18,
  },
  gradient: {
    padding: 0,
    borderRadius: 10,
  },
  bottomView: {
    flexDirection: 'row',
    marginBottom: 28,
    marginHorizontal: 60,
  },
  bottomText: {
    fontSize: 16,
    marginRight: 10
  }
});

export default React.memo(SignInScreen);
