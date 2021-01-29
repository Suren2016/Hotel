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
import {GRAY_LIGHT} from '../../constants/styles';
import FilterIcon from '../../resources/svg/filter_icon.svg';
import BackArrowIcon from '../../resources/svg/left_black_arrow_icon.svg';

const SignInSignUpStack = createStackNavigator();
const TabStack = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const FilterStack = createStackNavigator();
const SwitchStack = createStackNavigator()


const SignInSignUpScreen = () => {
  return (
    <SignInSignUpStack.Navigator screenOptions={{headerShown: false}}>
      <SignInSignUpStack.Screen name="SignIn" component={SignIn} />
      <SignInSignUpStack.Screen name="SignUp" component={SignUp} />
      <SignInSignUpStack.Screen name="Home" component={TabScreen} />
      <SignInSignUpStack.Screen name="Filter" component={FilterScreen} />
    </SignInSignUpStack.Navigator>
  );
};

const HomeScreens = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: null,
        }}
      /> 

      <HomeStack.Screen
        name="MapList"
        component={MapList}
        options={{
          headerTitle: null,
        }}
      />
    </HomeStack.Navigator>
  );
};

const FilterScreen = () => {
  return (
    <FilterStack.Navigator screenOptions={{headerShown: false}}>
    <FilterStack.Screen name="Filter" component={Filter} options={{
          headerTitle: null,
        }}/>
  </FilterStack.Navigator>
  )
  
}

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
