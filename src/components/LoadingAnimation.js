import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const LoadingAnimation = () => {
  return (
    <LottieView source={require('../../assets/animation/28514-mars-2020-nasa-mission.json')} autoPlay loop />
  );
};

export default LoadingAnimation;