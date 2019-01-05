import React, { useState, Fragment, Component } from "react";
import RecordButton from "./RecordButton";
import { StyleSheet, View, Picker } from "react-native";
import Modal from "react-native-modal";
import { Text } from "react-native-elements";


const styles = StyleSheet.create({
  container: {
    width: "100%",
    // height: 'auto',
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 0,
    borderRadius: 10,
    padding: 20
  },
  modal: {
    backgroundColor: "white"
  },
  selection: {
    flexDirection: "column",
    fontSize: 30
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },

});

export default class BottomSheet extends Component {

  render(){

    return (
      <Fragment>
        <View pointerEvents="box-none" style={styles.container}>

          <RecordButton />
        </View>

      </Fragment>
    );
  }
}
