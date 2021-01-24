// @ts-nocheck
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SignIn from '../Login/SignIn';
import SignUp from '../Login/SignUp';
import Home from '../Home/Home';
import User from '../User/User';
import MapList from '../Home/MapList';
import Filter from '../Home/Filter';
import { GRAY_LIGHT } from '../../constants/styles';
import FilterIcon from '../../resources/svg/filter_icon.svg'
import BackArrowIcon from '../../resources/svg/left_black_arrow_icon.svg'

const SignInSignUpStack = createStackNavigator();
const TabStack = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const MapToHomeStack = createStackNavigator();

const SignInSignUpScreen = () => {
  return (
    <SignInSignUpStack.Navigator screenOptions={{headerShown: false}}>
      <SignInSignUpStack.Screen name="SignIn" component={SignIn} />
      <SignInSignUpStack.Screen name="SignUp" component={SignUp} />
      <SignInSignUpStack.Screen name="Home" component={TabScreen} />
    </SignInSignUpStack.Navigator>
  );
};

const HomeScreens = ({navigation}) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              style={{flexDirection: 'row', marginLeft: 18}}
              onPress={() => navigation.navigate('Filter')}>
                <FilterIcon />
              <Text style={{marginLeft: 8}}>Filter</Text>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{marginRight: 18}}
              onPress={() => navigation.push('MapList')}>
              <Text>Map</Text>
            </TouchableOpacity>
          ),
          headerTitle: null,
        }}
      />

      <HomeStack.Screen
        name="MapList"
        component={MapList}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              style={{flexDirection: 'row', marginLeft: 18}}
              onPress={() => navigation.navigate('Filter')}>
                <FilterIcon />
              <Text style={{marginLeft: 8}}>Filter</Text>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{marginRight: 18}}
              onPress={() => navigation.goBack("Home")}>
              <Text>ListView</Text>
            </TouchableOpacity>
          ),
          headerTitle: null,
        }}
      />

      <HomeStack.Screen
        name="Filter"
        component={Filter}
        options={{
          headerLeft: () => (
              <TouchableOpacity style={{marginLeft: 20, padding: 8}} onPress={() => navigation.goBack()}>
            <BackArrowIcon />
          </TouchableOpacity>
          
          ),
          headerTitleStyle: {color: 'black', fontSize: 28, fontWeight: '600', marginLeft: -15 },
          headerTitleAlign: 'left',
          headerRight: () => (
            <TouchableOpacity style={{backgroundColor: GRAY_LIGHT, borderRadius: 10, marginRight: 20}}>
            <Text style={{marginHorizontal: 16, marginVertical: 8 }}>RESET</Text>
          </TouchableOpacity>
          )
        }}
      />
    </HomeStack.Navigator>
  );
};

// const MapToHomeScreen = () => {
//   return (
//     <MapToHomeStack.Navigator>
//       <MapToHomeStack.Screen name="MapList" component={MapList} />
//       <MapToHomeStack.Screen name="Home" component={Home} />
//     </MapToHomeStack.Navigator>
//   );
// };

const TabScreen = () => {
  return (
    <TabStack.Navigator>
      <TabStack.Screen name="Home" component={HomeScreens} />
      <TabStack.Screen name="User" component={User} />
    </TabStack.Navigator>
  );
};

const Navigations = () => {
  return (
    <NavigationContainer>
      <SignInSignUpScreen />
    </NavigationContainer>
  );
};

export default Navigations;
