import React, {Fragment} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { MapView} from 'expo';
import BottomSheet from './components/BottomSheet';
import TopBanner from './components/TopBanner';
import {Provider} from 'react-redux';
import store from './redux';

const styles = StyleSheet.create({

});


export default function App(){

  return (
    <Fragment>
      <Provider store = {store}>
          <TopBanner />
          <MapView
          style={{ flex: 1 }}
          provider="google"
          followsUserLocation
          showsMyLocationButton
          showsUserLocation
          loadingEnabled
        />
          <BottomSheet />

      </Provider>
    </Fragment>
  )
}

