import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import LottieView from 'lottie-react-native';
import { SimpleAnimation } from 'react-native-simple-animations';


import CustomHeader from '../../components/CustomHeader';
import PlaceHolder from '../../components/PlaceHolder';
import CustomButton from '../../components/apodComponents/CustomButton';
import NASAlogo from '../../components/apodComponents/NASAlogo';

const APODHomeScreen = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loaded, setLoaded] = useState(false);
    

    const getResponse = async () => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=bjgTULdgl31q0CeECyxHcgjoBYqdzHERTaBvKbsu', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
                setData(response);
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getResponse().then(() => setData());
    }, []);

//#191919
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
            <View style={{ flex: 1 }}>
                <SimpleAnimation delay={500} duration={2000} movementType='slide' direction='down' distance={200}>
                    <CustomHeader title="Astronomy Picture Of The Day" />
                </SimpleAnimation>
            </View>
            <View style={{ flex: 1 }}>
                <NASAlogo loading={loading} />
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <CustomButton onPress={() => {
                    navigation.navigate('Detail', {
                        //copyright: data.copyright,
                        date: data.date,
                        explanation: data.explanation,
                        url: data.url,
                        title: data.title,
                    });
                }} />
            </View >
        </SafeAreaView>
    )
}
export default APODHomeScreen;