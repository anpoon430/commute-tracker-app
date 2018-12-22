import React, { useState } from "react";
import { StyleSheet, View, Picker } from "react-native";
import { connect } from "react-redux";
import { Header, Text } from "react-native-elements";
import { msToTime } from "../utils/utils";
import { accent } from "../styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 100,
    justifyContent: "center",
    alignItems: "center"
  }
});

function TopBanner(props) {

  const { hh, mm, ss } = msToTime(props.timer);

  return (
    <Header
      backgroundColor="white"
      outerContainerStyles={styles.container}
      centerComponent={
        <Text h1 style={{ color: accent }}>
          <Text> {hh} :</Text>
          <Text> {mm} :</Text>
          <Text> {ss} </Text>

        </Text>
      }
    />
  );
}

const mapState = ({ currentTrip }) => ({
  timer: currentTrip.timer,
  startTime: currentTrip.startTime
});

export default connect(mapState)(TopBanner);
