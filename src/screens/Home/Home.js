// @ts-nocheck
import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';

import HeaderView from '../../components/ui/HeaderView/index';
// @ts-ignore
import FilterIcon from '../../resources/svg/filter_icon.svg';
import {GRAY_LIGHT, WHITE} from '../../constants/styles';
import Card from '../../components/ui/Card/index';

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
      <View style={{height: 1, backgroundColor: GRAY_LIGHT, marginTop: 13}} />
      <Text style={styles.title}>Featured</Text>
      <View>
        <ScrollView
          horizontal
          contentContainerStyle={styles.horizontalScroll}
          showsHorizontalScrollIndicator={false}
        >
          <Card containerStyle={styles.horizontalCard} />
          <Card containerStyle={styles.horizontalCard} />
          <Card containerStyle={styles.horizontalCard} />
        </ScrollView>
      </View>

      <View style={styles.container}>
        {/* <Text>Home</Text> */}
        <ScrollView contentContainerStyle={styles.verticalScroll}>
          <Card containerStyle={styles.verticalCard} bottomContent={true}/>
          <Card containerStyle={styles.verticalCard} bottomContent={true}/>
          <Card containerStyle={styles.verticalCard} bottomContent={true}/>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: 18,
    marginTop: 38,
    backgroundColor: GRAY_LIGHT,
    borderWidth: 1
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 18,
    marginTop: 38,
  },
  horizontalScroll: {
    flexGrow: 1,
    marginHorizontal: 0,
    paddingHorizontal: 9,
    // marginBottom: 10
  },
  horizontalCard: {
    width: 200,
    height: 120,
    marginHorizontal: 9,
    marginTop: 12,
  },
  verticalScroll: {
    flexGrow: 1,
    paddingTop: 18,
    paddingBottom: 43
  },
  verticalCard: {
    height: 185,
    marginHorizontal: 18,
    marginTop: 26,
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0
  }
});

export default React.memo(Home);
