import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Fontisto, Feather, MaterialIcons } from '@expo/vector-icons';

import CuriosityNavigation from './curiosity/CuriosityNavigation';
import APODNavigation from './apod/APODNavigation';
import MoreHomeScreen from './more/MoreHomeScreen';
import SplashScreen from './SplashScreen';
const Tab = createBottomTabNavigator();

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  });

  if (!isLoaded) {
    return (
      <>
        <StatusBar barStyle={'light-content'}/>
        <SplashScreen />
      </>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#191919' }}>
      <NavigationContainer>
        <StatusBar barStyle={'light-content'} />
        <Tab.Navigator
          initialRouteName="APOD"
          screenOptions={{
            tabBarActiveTintColor: "white",
            headerShown: false,
            tabBarStyle: { backgroundColor: '#191919', borderTopWidth: 0, height: 60, paddingBottom: 5, overflow: 'hidden', borderTopLeftRadius: 30, borderTopRightRadius: 30, position: 'absolute' },
            tabBarItemStyle: { backgroundColor: '#191919' },
          }}
        >
          <Tab.Screen
            name="APOD"
            component={APODNavigation}
            options={{
              tabBarLabel: 'APOD',
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="motion-photos-on" size={30} color={color} />
              ),
            }}

          />
          <Tab.Screen
            name="Curiosity"
            component={CuriosityNavigation}
            options={{
              tabBarLabel: 'Curiosity',
              tabBarIcon: ({ color }) => (
                <FontAwesome5 name="satellite" size={30} color={color} />
              ),
            }}
          />

          <Tab.Screen
            name="More"
            component={MoreHomeScreen}
            options={{
              tabBarLabel: 'More',
              tabBarIcon: ({ color }) => (
                <Feather name="plus-circle" size={30} color={color} />
              ),
            }}
          />

        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
