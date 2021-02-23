// @ts-ignore
// @ts-ignore
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  View,
  Text,
  ScrollView,
} from 'react-native';
// import HeaderView from '../../../components/ui/HeaderView/index';
// @ts-ignore
import BackArrowIcon from '../../../resources/svg/left_arrow_icon.svg';
// @ts-ignore
import PlaceIcon from '../../../resources/svg/place_icon.svg';
// @ts-ignore
import WalkerIcon from '../../../resources/svg/walker_icon.svg';
// @ts-ignore
import MobileIcon from '../../../resources/svg/mobile_icon.svg';
// @ts-ignore
import PhoneIcon from '../../../resources/svg/phone_icon.svg';
import {
  ICON_GRADIENT_FIRST_COLOR,
  ICON_GRADIENT_SECOND_COLOR,
  PLACEHOLDER_GRAY,
  WHITE,
} from '../../../constants/styles';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import LinearGradient from 'react-native-linear-gradient';
import CustomMarker from '../../../components/ui/CustomMarker';

const Hotel = ({route, navigation}) => {
  // const [id, setId] = useState();
  const id = route?.params?.id;
  // const id = navigation?.state?.params?.id;

  // useEffect(() => {
  //   try {
  //     setId();
  //   } catch (e) {
  //     console.log('ERROR - ', e);
  //   }
  // }, []);
  console.log('id - ', id); // height: '31%'

  return (
    <>
      <TouchableOpacity style={{flexDirection: 'row', height: '34%'}}>
        <ImageBackground
          source={{
            uri:
              'https://images.unsplash.com/photo-1587242778887-79dacd896635?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2167&q=80',
          }}
          style={{flex: 1}}
          // imageStyle={{}}
        >
          <TouchableOpacity
            style={{
              width: '10%',
              marginTop: 50,
              marginLeft: 20,
              padding: 8,
            }}
            onPress={() => navigation.navigate('Home')}>
            <BackArrowIcon />
          </TouchableOpacity>
        </ImageBackground>
      </TouchableOpacity>

      <View style={{height: '12%', flexDirection: 'row'}}>
        <TouchableOpacity style={{flex: 1, width: '33.33%'}}>
          <ImageBackground
            source={{
              uri:
                'https://images.unsplash.com/photo-1588932588492-fbd4e798bbcb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2167&q=80',
            }}
            style={{flex: 1}}></ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity style={{flex: 1, width: '33.33%'}}>
          <ImageBackground
            source={{
              uri:
                'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
            }}
            style={{flex: 1}}></ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity style={{flex: 1, width: '33.33%'}}>
          <ImageBackground
            source={{
              uri:
                'https://images.unsplash.com/photo-1560200353-ce0a76b1d438?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80',
            }}
            style={{flex: 1}}>
            <Text
              style={{
                position: 'absolute',
                top: 12,
                left: 30,
                fontSize: 18,
                fontWeight: '600',
                color: WHITE,
                zIndex: 100,
              }}>
              + 21
            </Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 24,
          backgroundColor: WHITE,
        }}>
        <View style={{height: 50, justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              marginLeft: 16,
              marginRight: 10,
            }}
            numberOfLines={1}>
            fgauyfgasdfaof sdf sdf sdf 111 1 11111
          </Text>
        </View>
        <View style={{height: 200}}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            // @ts-ignore
            customMapStyle={require('../../../../DATA/map.json')}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            <Marker
              coordinate={{
                latitude: 37.78825,
                longitude: -122.4324,
              }}>
              <CustomMarker title="$ 350" />
            </Marker>
          </MapView>
        </View>
        <View style={styles.iconView}>
          <PlaceIcon />
          <Text style={styles.textForIcon}>Place</Text>
        </View>
        <View style={styles.iconView}>
          <WalkerIcon />
          <Text style={styles.textForIcon}>Walker</Text>
        </View>
        <View style={styles.iconView}>
          <View>
            <LinearGradient
              style={styles.linearGradien}
              colors={[ICON_GRADIENT_FIRST_COLOR, ICON_GRADIENT_SECOND_COLOR]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}></LinearGradient>
            <PhoneIcon
              style={{position: 'absolute', top: 12, left: 13, zindex: 10}}
            />
          </View>

          <Text style={[styles.textForIcon, {textDecorationLine: 'underline'}]}>
            +37493454431
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textForIcon: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '600',
    color: PLACEHOLDER_GRAY,
  },
  iconView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
    marginHorizontal: 18,
  },
  linearGradien: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 38,
    height: 38,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    opacity: 0.2,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
});

export default React.memo(Hotel);
