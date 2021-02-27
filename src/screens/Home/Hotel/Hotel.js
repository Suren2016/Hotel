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
  StatusBar,
  Dimensions,
} from 'react-native';
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
import ModalView from '../../../components/ui/ModalView';

// @ts-ignore
import LeftArrowIcon from '../../../resources/svg/left_arrow_icon.svg';
// @ts-ignore
import RightArrowIcon from '../../../resources/svg/right_arrow_icon.svg';

const Hotel = ({navigation, route}) => {
  // const [id, setId] = useState();
  const [getHeight, setHeight] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [modalImage, setModalImage] = useState();

  const {width, height} = Dimensions.get('screen');

  const item = route?.params?.item;

  // const images = data.find((item) => item === 'imageURL');
  console.log('item - ', item);

  // /**
  //  * @param {any} lat
  //  * @param {any} lng
  //  */
  // const getPlaceName = async (lat, lng) => {
  //   const url = `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}`;
  //   const res = await fetch(url);
  //   // const json = await res.json();
  //   console.log('res - ', res);
  // };

  const nextInage = (modalImage) => {
    const images = item.imagURL;
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <TouchableOpacity
        style={{flexDirection: 'row', height: '34%'}}
        activeOpacity={0.2}
        onPress={() => {
          setModalImage(item.imagURL[0]);
          setIsVisible(true);
        }}>
        <ImageBackground
          source={{
            uri: item.imagURL[0],
          }}
          style={{flex: 1}}>
          <TouchableOpacity
            style={styles.largeImage}
            onPress={() => navigation.navigate('Home')}>
            <BackArrowIcon />
          </TouchableOpacity>
        </ImageBackground>
      </TouchableOpacity>

      <View
        style={{height: '12%', flexDirection: 'row'}}
        onLayout={(e) => {
          setHeight(e.nativeEvent.layout.height);
        }}>
        <TouchableOpacity
          style={styles.imageTouch}
          activeOpacity={0.2}
          onPress={() => {
            setModalImage(item.imagURL[0]);
            setIsVisible(true);
          }}>
          <ImageBackground
            source={{
              uri: item.imagURL[1],
            }}
            style={{flex: 1}}></ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.imageTouch}
          activeOpacity={0.2}
          onPress={() => {
            setModalImage(item.imagURL[2]);
            setIsVisible(true);
          }}>
          <ImageBackground
            source={{
              uri: item.imagURL[2],
            }}
            style={{flex: 1}}></ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.imageTouch}
          activeOpacity={0.2}
          onPress={() => {
            setModalImage(item.imagURL[3]);
            setIsVisible(true);
          }}>
          <ImageBackground
            source={{
              uri: item.imagURL[3],
            }}
            style={{flex: 1}}>
            <Text style={[styles.plusNumber, {top: getHeight / 2.8}]}>
              {`+ ${item.imagURL.length - 4}`}
            </Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.hotelTitleContainer}>
          <Text style={styles.hotelTitle} numberOfLines={1}>
            {item.name}
          </Text>
        </View>
        <View style={{height: 200}}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            // @ts-ignore
            customMapStyle={require('../../../../DATA/map.json')}
            region={{
              latitude: item.coordinate.lat,
              longitude: item.coordinate.lng,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            <Marker
              coordinate={{
                latitude: item.coordinate.lat,
                longitude: item.coordinate.lng,
              }}>
              <CustomMarker title={`$ ${item.price}`} />
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
        <TouchableOpacity style={styles.iconView}>
          <View>
            <LinearGradient
              style={styles.linearGradien}
              colors={[ICON_GRADIENT_FIRST_COLOR, ICON_GRADIENT_SECOND_COLOR]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}></LinearGradient>
            <PhoneIcon style={styles.phoneIcon} />
          </View>
          <Text style={[styles.textForIcon, {textDecorationLine: 'underline'}]}>
            +37493454431
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <ModalView
        visible={isVisible}
        onPress={() => setIsVisible(false)}
        content={
          <View style={{flex: 1}}>
            <ImageBackground
              style={{
                flex: 1,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}
              source={{
                uri: modalImage,
              }}>
              <TouchableOpacity style={styles.paddingSpace} onPress={() => {}}>
                <LeftArrowIcon />
              </TouchableOpacity>
              <TouchableOpacity style={styles.paddingSpace} onPress={() => {}}>
                <RightArrowIcon />
              </TouchableOpacity>
            </ImageBackground>
          </View>
        }
      />
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
  paddingSpace: {
    padding: 12,
  },
  phoneIcon: {
    position: 'absolute',
    top: 12,
    left: 13,
    zIndex: 10,
  },
  hotelTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 16,
    marginRight: 10,
  },
  hotelTitleContainer: {
    height: 50,
    justifyContent: 'center',
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 24,
    backgroundColor: WHITE,
  },
  plusNumber: {
    position: 'absolute',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: WHITE,
  },
  largeImage: {
    width: '10%',
    marginTop: 50,
    marginLeft: 20,
    padding: 8,
  },
  imageTouch: {
    flex: 1,
    width: '33.33%',
  },
});

export default React.memo(Hotel);
