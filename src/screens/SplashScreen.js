import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const SplashScreen = () => {
  return (
    <LottieView source={require('../../assets/animation/24047-nasa-worm-logo.json')} autoPlay loop style={{ backgroundColor: 'black' }} />
  );
};

export default SplashScreen;