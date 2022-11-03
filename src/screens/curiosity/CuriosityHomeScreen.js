import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

import CustomHeader from '../../components/CustomHeader';
import PlaceHolder from '../../components/PlaceHolder';
import CustomCard from '../../components/curiosityComponents/CustomCard';
import LoadingAnimation from '../../components/LoadingAnimation';
import AnimatedLogo from '../../components/apodComponents/AnimatedLogo';
const CuriosityHomeScreen = ({ navigation }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getResponse = async () => {
        //entra, lancia la fetch, attende il risultato della fetch
        const response = await fetch(
            'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=bjgTULdgl31q0CeECyxHcgjoBYqdzHERTaBvKbsu'
        );
        const data = await response.json();
        setLoading(false);
        console.log(data);
        return data.photos; //results è una voce dell'api
    };

    useEffect(() => {

        getResponse().then(setData);

    }, []);

    const renderItem = ({ item }) => (
        <CustomCard image={{ uri: item.img_src }} id={item.id}
            onPress={() => { navigation.navigate('Detail', { image2: item.img_src }) }} />
    );



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
            {loading ? (
                <LoadingAnimation />
            ) : (
                <View >
                    <CustomHeader title="Curiosity Mars Rover Photos" />
                    <View style={{ alignItems: 'center', paddingBottom: 10 }}>
                        <FlatList
                            data={data}
                            renderItem={renderItem} //props che va ad eseguire una funzione per ogni cosa della lista
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            numColumns={2}
                        />
                    </View>
                </View>
            )}
        </SafeAreaView>
    )
}
export default CuriosityHomeScreen;