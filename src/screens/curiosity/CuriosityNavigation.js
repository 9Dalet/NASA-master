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
import CuriosityHomeScreen from './CuriosityHomeScreen';
import CuriosityDetail from './CuriosityDetail';

//https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=bjgTULdgl31q0CeECyxHcgjoBYqdzHERTaBvKbsu
//https://api.nasa.gov/EPIC/api/natural/images?api_key=DEMO_KEY
const Stack = createStackNavigator();
const App = () => {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          //headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen
          name="Home"
          component={CuriosityHomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Detail" component={CuriosityDetail} options={{
            headerShown: false,
          }} />
      </Stack.Navigator>
  );
};
export default App;
