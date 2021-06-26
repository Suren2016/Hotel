// @ts-nocheck
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {GRAY_LIGHT, WHITE} from '../../constants/styles';
import Button from '../../components/ui/Button/index';
import {register} from '../../../utils/helper';

const SignUp = ({navigation}) => {
  const [values, setValues] = useState({});

  const onChange = (key, value) => {
    setValues({...values, [key]: value});
  };

  const onSubmit = () => {
    if (
      !values.name ||
      !values.email ||
      !values.id ||
      !values.password ||
      !values.confirm
    ) {
      Alert.alert('Fill all fields', '', [{text: 'OK', onPress: () => {}}]);
      return null;
    } else if (values.password !== values.confirm) {
      Alert.alert('Password Confirmation failed', 'Input the same password', [
        {text: 'OK', onPress: () => {}},
      ]);
      return null;
    } else {
      register(values)
        .then((res) => {
          if (res) {
            navigation.navigate('Home', {
              screen: 'Home',
              params: {data: values},
            });
          }
        })
        .catch((e) => console.log('err - ', e));
      console.log('values - ', values);
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: WHITE, flex: 1}}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.main}
        extraHeight={130}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Welome Back!</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Full Name"
            value={values.name}
            onChangeText={(val) => onChange('name', val)}
            autoCapitalize="none"
          />
          <TextInput
            style={[styles.textInput, {marginTop: 12}]}
            placeholder="Email Address"
            value={values.email}
            onChangeText={(val) => onChange('email', val)}
            autoCapitalize="none"
          />
          <TextInput
            style={[styles.textInput, {marginTop: 12}]}
            placeholder="ID Number"
            keyboardType="number-pad"
            value={values.id}
            onChangeText={(val) => onChange('id', val)}
          />
          <TextInput
            style={[styles.textInput, {marginTop: 12}]}
            placeholder="Password"
            secureTextEntry
            value={values.password}
            onChangeText={(val) => onChange('password', val)}
          />
          <TextInput
            style={[styles.textInput, {marginTop: 12}]}
            placeholder="Confirm Password"
            secureTextEntry
            value={values.confirm}
            onChangeText={(val) => onChange('confirm', val)}
          />
          <Button title="SIGN UP" onPress={onSubmit} />
        </View>

        <View style={styles.bottomView}>
          <Text style={styles.bottomText}>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text
              style={[
                styles.bottomText,
                {textDecorationLine: 'underline', fontWeight: '500'},
              ]}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    // flex: 1,
    flexGrow: 1,
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

export default React.memo(SignUp);
