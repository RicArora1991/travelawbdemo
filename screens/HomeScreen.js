import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const places = [
  { name: 'Paris', image: require('../assets/paris.png') },
  { name: 'New York', image: require('../assets/newyork.png') },
  { name: 'Tokyo', image: require('../assets/tokyo.png') },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {places.map((place, index) => (
        <View key={index} style={styles.placeContainer}>
          <Image source={place.image} style={styles.image} />
          <Text style={styles.text}>{place.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  placeContainer: {
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
});
