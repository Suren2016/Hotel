// @ts-nocheck
import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

import HeaderView from '../../components/ui/HeaderView/index'
import FilterIcon from '../../resources/svg/filter_icon.svg'



const MapList = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
    <HeaderView 
    onPressLeft={() => navigation.navigate('Filter')}
    onPressRight={() => navigation.navigate('Home')}
    leftTitle="Filter"
    rightTitle="List view"
    icon={(<FilterIcon />)}
    />
    <View style={styles.container}>
      <Text>Map List</Text>
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

export default React.memo(MapList);
