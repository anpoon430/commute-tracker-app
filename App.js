import React, {Fragment} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';
import { MapView} from 'expo';


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0, right: 0, bottom: '5%'
  },
  recordBtn:{
    borderColor: 'white',
    borderWidth:5,
    backgroundColor:'red',
    width:70,
    height:70
  }
});


export default function App(){

  const handleRecord = (evt) => {
    console.log(evt);
  }
  return (
    <Fragment>
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
      <View
        style = {styles.container}
        pointerEvents='box-none'
        >
        <Button
          buttonStyle= {styles.recordBtn}
          onPress={handleRecord}
          raised
          borderRadius={500}
          />
      </View>
    </Fragment>
  )
}

