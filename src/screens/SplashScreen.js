import React from 'react';
import AnimatedLogo from "../components/apodComponents/AnimatedLogo";

const SplashScreen = () => {
  return (
    <AnimatedLogo
        source={require('../../assets/animation/24047-nasa-worm-logo.json')}
        autoPlay
        loop
        style={{ flex: 1, backgroundColor: 'black' }}
    />
  );
};

export default SplashScreen;
