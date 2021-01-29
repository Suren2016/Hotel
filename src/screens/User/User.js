import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {GRAY_LIGHT} from '../../constants/styles';

const User = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 82,
          backgroundColor: '#f00',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 32,
        }}>
        <Text style={{fontSize: 22, fontWeight: 'bold', marginBottom: -26}}>
          Suren Abrahamyan
        </Text>
      </View>
      <View style={{marginHorizontal: 26, marginTop: 40, borderWidth: 1}}>
        <TouchableOpacity>
          <Text style={styles.textBottomSpace}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textBottomSpace}>Term of use</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textBottomSpace}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.popToTop()}>
          <Text style={[styles.textBottomSpace, {marginTop: 20}]}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textBottomSpace: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: '600'
  },
});
export default React.memo(User);
