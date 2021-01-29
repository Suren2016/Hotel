// @ts-nocheck
import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';

import HeaderView from '../../components/ui/HeaderView/index';
import {GRAY_LIGHT} from '../../constants/styles';

import BackArrowIcon from '../../resources/svg/left_black_arrow_icon.svg';

const Filter = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderView
        icon={<BackArrowIcon />}
        title="Filter"
        rightTitle="RESET"
        onPressLeft={() => navigation.navigate('Home')}
        onPressRight={() => console.log("RESET")}
        leftTitleStyle={{
          color: 'black',
          fontSize: 28,
          fontWeight: '600',
          marginLeft: 24,
        }}
        leftContainerStyle={{ paddingVertical: 6, paddingHorizontal: 8, marginLeft: -8}}
        rightContainerStyle={{
          backgroundColor: GRAY_LIGHT,
          borderRadius: 10,
        }}
        rightTitleStyle={{marginHorizontal: 16, marginVertical: 8}}
      />
      <View style={{height: 1, backgroundColor: GRAY_LIGHT, marginTop: 13}}/>
      <View style={styles.container}>
        <Text>Filter</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(Filter);
