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
import Button from '../../components/ui/Button';

import {
  GRAY_LIGHT,
  WHITE,
} from '../../constants/styles';

const SignIn = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: WHITE}}>
      <View style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Welome Back!</Text>
          <TextInput style={styles.textInput} placeholder="Email Address" />
          <TextInput
            style={[styles.textInput, {marginTop: 12}]}
            placeholder="Password"
            secureTextEntry
          />
          <Button title='SIGN IN' onPress={() => navigation.navigate('Home')}/>
        </View>

        <View style={styles.bottomView}>
          <Text style={styles.bottomText}>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={[styles.bottomText, {textDecorationLine: 'underline',fontWeight: '500'}]}>Sign Up</Text>
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
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
  },

  bottomView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 28,
    marginHorizontal: 60,
  },
  bottomText: {
    fontSize: 16,
    marginRight: 10,
  }
});

export default React.memo(SignIn);
