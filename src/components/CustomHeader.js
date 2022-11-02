import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
    useFonts,
    Merriweather_700Bold,
  } from '@expo-google-fonts/merriweather';

const CustomHeader = (props) => {

    let [fontsLoaded] = useFonts({
        Merriweather_700Bold
      });
    
      if (!fontsLoaded) {
        return null;
      }

    return (
            <View style={styles.header}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
    )

}

const styles = StyleSheet.create({
    header: {
        height: 100,
        width: '100%',
        backgroundColor: '#191919',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        justifyContent: 'center',
        //elevation: 7
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Merriweather_700Bold',
        fontSize: 20
    }
})

export default CustomHeader;