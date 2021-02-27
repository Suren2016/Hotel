// @ts-nocheck
import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ifIphoneX} from 'react-native-iphone-x-helper';

import SignIn from '../Login/SignIn';
import SignUp from '../Login/SignUp';
import Home from '../Home/Home';
import User from '../User/User';
import MapList from '../Home/MapList';
import Filter from '../Home/Filter';
import Hotel from '../Home/Hotel/Hotel';

import SelectedHomeIcon from '../../resources/svg/selected_home_icon.svg';
import HomeIcon from '../../resources/svg/home_icon.svg';
import SelectedUserIcon from '../../resources/svg/selected_user_icon.svg';
import UserIcon from '../../resources/svg/user_icon.svg';

const SignInSignUpStack = createStackNavigator();
const TabStack = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const FilterStack = createStackNavigator();
// const GallerylStack = createStackNavigator();

const SignInSignUpScreen = () => {
  return (
    <SignInSignUpStack.Navigator screenOptions={{headerShown: false}}>
      <SignInSignUpStack.Screen name="SignIn" component={SignIn} />
      <SignInSignUpStack.Screen name="SignUp" component={SignUp} />
      <SignInSignUpStack.Screen
        name="Home"
        component={TabScreen}
        options={{gestureEnabled: false}}
      />
      <SignInSignUpStack.Screen
        name="Filter"
        component={FilterScreen}
        options={{gestureEnabled: false}}
      />
    </SignInSignUpStack.Navigator>
  );
};

// const GallerylStackScreens = () => {
//   return (
//     <GallerylStack.Navigator screenOptions={{headerShown: false}}>
//       <GallerylStack.Screen
//         name="Hotel"
//         component={Hotel}
//         options={{headerTitle: null}}
//       />
//       <GallerylStack.Screen
//         name="Home"
//         component={Home}
//         options={{headerTitle: null}}
//       />
//     </GallerylStack.Navigator>
//   );
// };

const HomeScreens = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{headerTitle: null}}
      />
      <HomeStack.Screen
        name="MapList"
        component={MapList}
        options={{headerTitle: null}}
      />
      <HomeStack.Screen
        name="Hotel"
        component={Hotel}
        options={{headerTitle: null}}
      />
    </HomeStack.Navigator>
  );
};

const FilterScreen = () => {
  return (
    <FilterStack.Navigator screenOptions={{headerShown: false}}>
      <FilterStack.Screen
        name="Filter"
        component={Filter}
        options={{
          headerTitle: null,
        }}
      />
    </FilterStack.Navigator>
  );
};

const TabScreen = () => {
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name="Home"
        component={HomeScreens}
        options={{
          tabBarLabel: ({focused}) => {
            return (
              <View style={{position: 'absolute', bottom: ifIphoneX(-2, 4)}}>
                {focused ? (
                  <SelectedHomeIcon width={40} height={40} />
                ) : (
                  <HomeIcon width={40} height={40} />
                )}
              </View>
            );
          },
        }}
      />
      <TabStack.Screen
        name="User"
        component={User}
        options={{
          tabBarLabel: ({focused}) => {
            return (
              <View style={{position: 'absolute', bottom: ifIphoneX(-2, 6)}}>
                {focused ? (
                  <SelectedUserIcon width={36} height={36} />
                ) : (
                  <UserIcon width={36} height={36} />
                )}
              </View>
            );
          },
        }}
      />
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
