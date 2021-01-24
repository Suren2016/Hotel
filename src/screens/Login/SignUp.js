import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';

import { GRAY_LIGHT } from '../../constants/styles';
import Button from '../../components/ui/Button/index'

const SignUpScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Welome Back!</Text>
          <TextInput style={styles.textInput} placeholder="Full Name" />
          <TextInput style={[styles.textInput, {marginTop: 12}]} placeholder="Email Address" />
          <TextInput
            style={[styles.textInput, {marginTop: 12}]}
            placeholder="Password"
            secureTextEntry
          />
          <TextInput
            style={[styles.textInput, {marginTop: 12}]}
            placeholder="Confirm Password"
            secureTextEntry
          />
          <Button title='SIGN UP' onPress={() => navigation.navigate('Home')} />
        </View>

        <View style={styles.bottomView}>
          <Text style={styles.bottomText}>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={[styles.bottomText, {textDecorationLine: 'underline'}]}>Sign In</Text>
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

export default React.memo(SignUpScreen);
