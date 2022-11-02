import React from 'react';
import { Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import 'react-native-gesture-handler';

// You can import from local files
import APODHomeScreen from './APODHomeScreen';
import APODDetail from './APODDetail';

//https://api.nasa.gov/planetary/apod?api_key=bjgTULdgl31q0CeECyxHcgjoBYqdzHERTaBvKbsu
//https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=bjgTULdgl31q0CeECyxHcgjoBYqdzHERTaBvKbsu
//https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=bjgTULdgl31q0CeECyxHcgjoBYqdzHERTaBvKbsu
const Stack = createStackNavigator();
const APODNavigation = () => {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}>
        <Stack.Screen
          name="Home"
          component={APODHomeScreen}
          options={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            ...TransitionPresets.ModalSlideFromBottomIOS,
          }}
        />
        <Stack.Screen name="Detail" component={APODDetail} />
      </Stack.Navigator>
  );
};
export default APODNavigation;