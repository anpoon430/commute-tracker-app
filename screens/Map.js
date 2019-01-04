import React, { Fragment, Component } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { MapView, Location, Permissions } from "expo";
import BottomSheet from "../components/BottomSheet";
import TopBanner from "../components/TopBanner";


export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0
    };
  }

  _onMapReady = async () => {
    try {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        Alert.alert(
          'Your location is not available',
          'Please enable location services',
          [
            {text: 'OK', onPress: () => console.log('OK pressed')},
          ],
          { cancelable: true }
        )
      }
      let location = await Location.getCurrentPositionAsync({});
      this.setState(
        {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        },
        () => {
          this.map.animateToRegion({
            ...this.state,
            latitudeDelta: 0.0001,
            longitudeDelta: 0.01
          }, 3000);
        }
      );
    } catch (err) {
      console.error(err);
    }
  };
  render() {
    return (
      <Fragment>
        <TopBanner />
        <MapView
          ref={ref => {
            this.map = ref;
          }}
          style={{ flex: 1 }}
          provider="google"
          followsUserLocation
          showsMyLocationButton
          showsUserLocation
          loadingEnabled
          region = {{latitude: 0, longitude:0, latitudeDelta: 90, longitudeDelta: 180}}
          onMapReady={this._onMapReady}
        />
        <BottomSheet />
      </Fragment>
    );
  }
}
