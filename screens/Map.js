import React, {Fragment, Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { MapView} from 'expo';
import BottomSheet from '../components/BottomSheet';
import TopBanner from '../components/TopBanner';



const styles = StyleSheet.create({

});


export default function Map (){
    return (
      <Fragment>
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


      </Fragment>
    )
  }

