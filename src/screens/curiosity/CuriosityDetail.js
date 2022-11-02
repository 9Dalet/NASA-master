import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

//https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=bjgTULdgl31q0CeECyxHcgjoBYqdzHERTaBvKbsu

const CuriosityDetail = ({ route, navigation }) => {

    const { image2 } = route.params;

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={40} color="white" />
            </TouchableOpacity>
            <View style={{flex: 1}}></View>
            <View style={{flex: 1}}>
                <Image source={{ uri: image2 }} style={styles.image} />
            </View>
            <View style={{flex: 1}}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    button: {
        //backgroundColor: 'rgba(253, 225, 225, 0.32)',
        height: 41,
        width: 41,
        marginTop: 22,
        position: 'absolute',
        zIndex: 1,
        left: 10,
        top: 10,
        borderRadius: 20,
    },
})


export default CuriosityDetail;