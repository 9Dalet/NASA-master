import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


const PlaceHolder = (props) => {
    return(
        <View style={styles.header}>
            <Image source={props.image} style={styles.image}/>
        </View>
    )

}

const styles = StyleSheet.create({
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'center'
      }
})

export default PlaceHolder;