import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import {
  useFonts,
  Merriweather_300Light,
} from '@expo-google-fonts/merriweather';
import {
  Teko_400Regular
} from '@expo-google-fonts/teko';

const ImagePage = ({ navigation, route }) => {
  const {
    //copyright,
    date,
    explanation,
    url,
    title,
  } = route.params;

  let [fontsLoaded] = useFonts({
    Teko_400Regular,
    Merriweather_300Light
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={40} color="clear" />
      </TouchableOpacity>
      <ScrollView>
      <Image source={{ uri: url }} style={styles.image} />
      <View style={{ marginTop: 5, marginBottom: 10, marginHorizontal: 10 }}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.date}>Taken: {date}</Text>
      <View
        style={{
          padding: 15,
          backgroundColor: 'rgba(0, 0, 0, 0.31)',
          marginHorizontal: 5,
          borderRadius: 25,
        }}>
        <Text style={styles.explanation}>{explanation}</Text>
        {/*<Text>{copyright}</Text>*/}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    paddingBottom: 63
    //paddingTop: Constants.statusBarHeight,
  },
  image: {
    width: '100%',
    height: 300,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    resizeMode: 'cover'
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Teko_400Regular'
  },
  date: {
    color: 'white',
    textAlign: 'right',
    marginBottom: 5,
    padding: 10,
    fontSize: 20,
    fontFamily: 'Teko_400Regular'
  },
  explanation: {
    color: 'white',
    textAlign: 'justify',
    //fontSize: 15,
    fontFamily: 'Merriweather_300Light'
  },
  button: {
    backgroundColor: 'rgba(253, 225, 225, 0.32)',
    height: 41,
    width: 41,
    marginTop: 10,
    position: 'absolute',
    zIndex: 1,
    left: 10,
    top: 12,
    borderRadius: 20,
  },
});

export default ImagePage;
