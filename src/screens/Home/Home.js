// @ts-nocheck
import React, {useState, useEffect, Fragment} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  // @ts-ignore
  ActivityIndicator,
  Button,
} from 'react-native';

import HeaderView from '../../components/ui/HeaderView/index';
// @ts-ignore
import FilterIcon from '../../resources/svg/filter_icon.svg';
// @ts-ignore
import {GRAY_LIGHT, WHITE} from '../../constants/styles';
import Card from '../../components/ui/Card/index';

// @ts-ignore
import hotels from '../../../DATA/Hotels.json';

const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    try {
      if (hotels) {
        setData(hotels);
        const featuredData = hotels.filter((item) => item.hasPrePeyment);
        setFeatured(featuredData);
      }
    } catch (e) {
      console.log('error - ', e);
    }
  }, []);

  const renderHorizontalCard = () => {
    return (
      <>
        {featured.map((item, i) => (
          <Fragment key={i}>
            <Card
              containerStyle={styles.horizontalCard}
              text={item.name}
              mainStyle={{
                width: 200,
                height: 120,
              }}
              image={item.imagURL[0]}
              textStyle={{fontSize: 16, fontWeight: '700'}}
              onPress={() => {
                // console.log('image - ', item.id);
                navigation.navigate('Hotel', {
                  item: item,
                });
              }}
            />
          </Fragment>
        ))}
      </>
    );
  };

  const renderVerticalCard = () => {
    return (
      <>
        {data.map((item, i) => (
          <Fragment key={i}>
            <Card
              containerStyle={[styles.verticalCard, {height: 185}]}
              bottomContent={true}
              text={item.name}
              image={item.imagURL[0]}
              textStyle={{fontSize: 22, fontWeight: '700'}}
              imageStyle={{borderTopLeftRadius: 8, borderTopRightRadius: 8}}
              price={item.price}
              prePayment={
                item.hasPrePeyment ? 'Has prepayment' : 'No prepeyment'
              }
              onPress={() => {
                // console.log('imageURL - ', item.imagURL);
                // @ts-ignore
                navigation.navigate('Hotel', {
                  item: item,
                });
              }}
            />
          </Fragment>
        ))}
      </>
    );
  };

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
          showsHorizontalScrollIndicator={false}>
          {renderHorizontalCard()}
        </ScrollView>
      </View>

      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.verticalScroll}>
          {renderVerticalCard()}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 38,
    backgroundColor: GRAY_LIGHT,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 18,
    marginTop: 24,
  },
  horizontalScroll: {
    flexGrow: 1,
    marginHorizontal: 0,
    paddingHorizontal: 9,
  },
  horizontalCard: {
    overflow: 'scroll',
    marginHorizontal: 9,
    marginTop: 12,
    borderRadius: 8,
  },
  verticalScroll: {
    flexGrow: 1,
    paddingTop: 18,
    paddingBottom: 43,
  },
  verticalCard: {
    marginHorizontal: 18,
    marginTop: 26,
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0,
  },
});

export default React.memo(Home);
