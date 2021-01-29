// @ts-nocheck

import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

import HeaderView from '../../components/ui/HeaderView/index';
import FilterIcon from '../../resources/svg/filter_icon.svg';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderView
        onPressLeft={() => navigation.navigate('Filter')}
        onPressRight={() => navigation.navigate('MapList')}
        leftTitle="Filter"
        rightTitle="MapList"
        icon={<FilterIcon />}
      />
      <View style={styles.container}>
        <Text>Home</Text>
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

export default React.memo(Home);
