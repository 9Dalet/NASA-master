import React from 'react';
import LottieView from 'lottie-react-native';


const NASAlogo = (props) => {
    return(
        <LottieView source={require('../../../assets/animation/76438-telescope.json')} autoPlay loop={false} loading={props.loading} style={{flex:1}}/>
    )
}

export default NASAlogo;