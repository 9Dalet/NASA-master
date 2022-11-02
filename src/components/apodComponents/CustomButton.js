import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { SimpleAnimation } from 'react-native-simple-animations';

const CustomButton = (props) => {
  return (
    <SimpleAnimation delay={500} duration={2000} movementType='slide' direction='up' distance={200} >
      <TouchableOpacity
        style={styles.button}
        onPress={props.onPress}>
        <Text style={styles.text}>Discover</Text>
      </TouchableOpacity>
    </SimpleAnimation>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: '30%',
    height: 50,
    backgroundColor: '#0b3d91',
    borderColor: '#fc3d21',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    borderRadius: 30,
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
});
export default CustomButton;
