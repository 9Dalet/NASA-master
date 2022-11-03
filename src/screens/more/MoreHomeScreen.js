import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import LottieView from 'lottie-react-native';
import AnimatedLogo from '../../components/apodComponents/AnimatedLogo';

const MoreHomeScreen = () => {
    const [loading, setLoading] = useState(true);

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <AnimatedLogo loading={loading} source={require('../../../assets/animation/94691-space.json')} autoPlay
                    loop
                    style={{ flex: 1, backgroundColor: 'black' }} />
            </View>
            <View style={{ height: 200 }}>
                <Text style={styles.text}>Stay Tuned for More Content</Text>
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',

    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    }
})

export default MoreHomeScreen;