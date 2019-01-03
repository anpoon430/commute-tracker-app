import React, { useState } from "react";
import RecordButton from "./RecordButton";
import { StyleSheet, View, Picker } from "react-native";
import Modal from "react-native-modal";
import { Text } from "react-native-elements";
import {purposeIcons, modeIcons} from './Icons';

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
  }
});

export default function BottomSheet() {
  const [mode, setMode] = useState("Car");
  const [tripPurpose, setTripPurpose] = useState("Commute");
  const [purposeModal, setPurposeModal] = useState(false);
  const [modeModal, setModeModal] = useState(false);
  // const usePurpose = purpose => {
  //   setPurposeModal(!purposeModal);
  //   setTripPurpose(purpose);
  // };
  // const useMode = modeSelected => {
  //   setModeModal(!modeModal);
  //   setMode(modeSelected);
  // };
  // const purposeIconsList = purposeIcons(usePurpose);
  // const modeIconsList = modeIcons(useMode);
  return (
    <View pointerEvents="box-none" style={styles.container}>
      <View pointerEvents="box-none" style={styles.headerContainer}>
        <View style={styles.selection}>
          {/* {purposeIconsList[tripPurpose]} */}
          <Text>Purpose</Text>
        </View>
        <View style={styles.selection}>
          {/* {modeIconsList[mode]} */}
          <Text>Purpose</Text>
        </View>
      </View>

      <Modal
        onBackdropPress={() => setPurposeModal(!purposeModal)}
        isVisible={purposeModal}
      >
        <View style={styles.modal}>
          {/* {Object.values(purposeIconsList).map(icon => icon)} */}
        </View>
      </Modal>
      <Modal
        onBackdropPress={() => setModeModal(!modeModal)}
        isVisible={modeModal}
      >
        <View style={styles.modal}>
          {/* {Object.values(modeIconsList).map(icon => icon)} */}
        </View>
      </Modal>
      <RecordButton />
    </View>
  );
}
