import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView} from 'expo';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default function App(){


  return (
    <MapView
    style={{ flex: 1 }}
    provider="google"
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    followsUserLocation
    showsMyLocationButton
    showsUserLocation
  />
    // <View style = {styles.container}>
    //   <Text>
    //     Some stuff
    //   </Text>
    // </View>
  )
}

