import React from 'react';
import LottieView from 'lottie-react-native';


const Animation = (props) => {
    return(
        <LottieView source={require('../../../assets/animation/94691-space.json')} autoPlay loop loading={props.loading}/>
    )
}

export default Animation;