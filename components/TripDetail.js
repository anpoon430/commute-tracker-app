import React, {Fragment, Component} from 'react';
import { StyleSheet, View} from 'react-native';
import { Text, Button, Card, SearchBar, List, ListItem, Icon, Header } from 'react-native-elements'
import {MapView} from 'expo';


const testCoords = [
  {latitude: 43.7771, longitude: -79.3441},
  {latitude: 43.7759, longitude: -79.2578}
]

const styles = StyleSheet.create({
  map: {
    height: 200
  }
});

export default class TripDetail extends Component{


  render(){
    return (
      <View>
        <MapView
          ref = {ref => {this.map = ref}}
          style = {styles.map}
          provider = "google"
          loadingEnabled
          rotateEnabled = {false}
          pinchEnabled = {false}
          zoomEnabled = {false}
          scrollEnabled = {false}
          onMapReady = {(e) => this.map.fitToCoordinates(testCoords)}
          />


      </View>
    )
  }
}

