import React, {useEffect, useState} from 'react';
import LottieView from 'lottie-react-native';

const AnimatedLogo = ({
    source,
    autoPlay = true,
    loop = false,
    loading = true,
    style,
}) => {
    const [shown, setShown] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShown(true);
        }, 0);
    }, []);
    return (
        <LottieView
            //source={shown ? source : undefined}
            source={source}
            autoPlay={autoPlay}
            loop={loop}
            loading={loading}
            style={style}
        />
    )
}

export default AnimatedLogo;
