/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Button from '../../components/ui/Button';

import {GRAY_LIGHT, WHITE} from '../../constants/styles';
import {login} from '../../../utils/helper';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    reset();
  }, []);

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const signIn = async () => {
    console.log('emal pass - ', email, password);
    if (!email || !password) {
      Alert.alert('Fill all fields', '', [{text: 'OK', onPress: () => {}}]);
    } else {
      let data = await login(email, password);
      console.log('login data - ', data);
      if (data) {
        navigation.navigate('Home', {data: data});
        reset();
      } else {
        Alert.alert('Invalid email or password', 'Try again', [
          {text: 'ok', onPress: () => reset()},
        ]);
      }
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: WHITE}}>
      <View style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Welome Back!</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Email Address"
            value={email}
            onChangeText={(val) => setEmail(val.toLowerCase())}
            autoCapitalize="none"
          />
          <TextInput
            style={[styles.textInput, {marginTop: 12}]}
            value={password}
            onChangeText={(val) => setPassword(val)}
            placeholder="Password"
            secureTextEntry
            autoCapitalize="none"
          />
          <Button title="SIGN IN" onPress={signIn} />
        </View>

        <View style={styles.bottomView}>
          <Text style={styles.bottomText}>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text
              style={[
                styles.bottomText,
                {textDecorationLine: 'underline', fontWeight: '500'},
              ]}>
              Sign Up
            </Text>
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
  },
});

export default React.memo(SignIn);
