import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


const CustomCard = (props) => {
  return (
    <TouchableOpacity style={styles.card} onPress={props.onPress}>
      <View style={{ padding: 10 }}>
        <Image
          source={props.image}
          style={{ height: 120, width: '100%', resizeMode: 'cover' }}
        />
      </View>
      <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>
        {props.id}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 180,
    width: 180,
    margin: 5,
    backgroundColor: 'white',
    //padding: 10,
    //justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});

export default CustomCard;
