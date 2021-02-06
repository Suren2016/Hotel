// @ts-nocheck
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import HeaderView from '../../components/ui/HeaderView/index';
import FilterIcon from '../../resources/svg/filter_icon.svg';
import Card from '../../components/ui/Card/index';
import LinearGradient from 'react-native-linear-gradient';
import {
  GRADIENT_DARK,
  GRADIENT_MIDDLE,
  RED_SHADOW,
} from '../../constants/styles';

// API key  =   AIzaSyDb5azMde22cgt1lXWHylymS2NLj5ToUzM

const CustomMarker = ({title}) => {
  return (
    <TouchableOpacity>
      <LinearGradient
        style={{borderRadius: 40}}
        colors={[GRADIENT_DARK, GRADIENT_MIDDLE, RED_SHADOW]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text
          style={{
            color: 'white',
            marginHorizontal: 12,
            marginVertical: 6,
            fontWeight: '800',
            fontSize: 17,
            textAlign: 'center',
          }}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const MapList = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
      }}>
      <HeaderView
        onPressLeft={() => navigation.navigate('Filter')}
        onPressRight={() => navigation.navigate('Home')}
        leftTitle="Filter"
        rightTitle="List view"
        icon={<FilterIcon />}
      />
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        mapType="terrain">
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}>
          <CustomMarker title="$512+" />
        </Marker>
        <Marker
          coordinate={{
            latitude: 37.78605,
            longitude: -122.4354,
          }}>
          <CustomMarker title="$320+" />
        </Marker>
        <Marker
          coordinate={{
            latitude: 37.79225,
            longitude: -122.4284,
          }}>
          <CustomMarker title="$200+" />
        </Marker>
        <Marker
          coordinate={{
            latitude: 37.78955,
            longitude: -122.4364,
          }}>
          <CustomMarker title="$400+" />
        </Marker>
        <Marker
          coordinate={{
            latitude: 37.79155,
            longitude: -122.4334,
          }}>
          <CustomMarker title="$610+" />
        </Marker>
      </MapView>
      <View style={styles.card}>
        <Card />
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
  map: {
    ...StyleSheet.absoluteFillObject,
    // flex: 1,
    top: 100,
    backgroundColor: 'transparent',
  },
  card: {
    marginHorizontal: 66,
    marginBottom: 28,
    height: 146,
  },
});

export default React.memo(MapList);
