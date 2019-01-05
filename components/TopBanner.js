import React, { Component, Fragment } from "react";
import { StyleSheet, View, TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import { Header, Text, Icon, Button } from "react-native-elements";
import { msToTime } from "../utils/utils";
import { purposeIcons, modeIcons, CloseIcon } from "./Icons";
import ActionButton from "react-native-action-button";
import { accent } from "../styles";
import Modal from "react-native-modal";
import { Font } from "expo";

const styles = StyleSheet.create({
  container: {
    height: "20%"
  },
  banner: {
    padding: 10,
    height: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  fab: {
    borderColor: "#ece6e6",
    borderStyle: "solid",
    borderLeftWidth: 1,
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    justifyContent:'center'
  },
  fabRight: {
    flex: 1
  },
  selection: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    alignItems: "center",
    height: '100%'
  },
  timer: {
    color: 'black',
    fontFamily: "Helvetica Neue"
  },
  timerDigits: {
    flex: 1
  },
  iconText: {}
});

class TopBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      purpose: "Commute",
      mode: "Car",
      purposeListOpen: false,
      modeListOpen: false,
      iconsLoaded: false
    };
  }
  handleModePress = (mode, listType) => {
    this.setState(state => ({
      mode,
      [listType]: !state[listType]
    }));
  };
  handlePurposePress = (purpose, listType) => {
    this.setState(state => ({
      purpose,
      [listType]: !state[listType]
    }));
  };
  toggleModal = (listTypeOpen) => {
    this.setState( state => ({
      [listTypeOpen]: !state[listTypeOpen]
    }))
  }
  componentDidMount() {
    this.purposeIcons = purposeIcons(this.handlePurposePress, 'purposeListOpen');
    this.modeIcons = modeIcons(this.handleModePress, 'modeListOpen');
    this.setState({ iconsLoaded: true });
  }
  render() {
    const { hh, mm, ss } = msToTime(this.props.timer);
    return (
      <View style={styles.container}>
        <Header
          backgroundColor="white"
          outerContainerStyles={styles.banner}
          centerComponent={
            <Text h1 style={styles.timer}>
              <Text> {hh} :</Text>
              <Text> {mm} :</Text>
              <Text> {ss} </Text>
            </Text>
          }
        />
        <View style={styles.selection}>
          <TouchableHighlight style={styles.fab}
            onPress = {() => this.toggleModal('purposeListOpen')}
          >
            <View>
              {this.purposeIcons && this.purposeIcons[this.state.purpose]}
              {/* <Text>{this.state.purpose}</Text> */}
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress = {() => this.toggleModal('modeListOpen')}
            style={styles.fab}>
            <View>
              {this.modeIcons && this.modeIcons[this.state.mode]}
              {/* <Text style={styles.iconText}>{this.state.mode}</Text> */}
            </View>
          </TouchableHighlight>
        </View>
        <Modal isVisible={this.state.purposeListOpen}
          onBackdropPress	= {() => this.toggleModal('purposeListOpen')}
          >
          <View style={styles.modal} >
            {this.purposeIcons && Object.values(this.purposeIcons).map(icon => icon)}
          </View>
        </Modal>
        <Modal isVisible={this.state.modeListOpen}
          onBackdropPress = {() => this.toggleModal('modeListOpen')}
          >
          <View style={styles.modal}>
          {this.modeIcons && Object.values(this.modeIcons).map(icon => icon)}
          </View>
        </Modal>
      </View>
    );
  }
}

const mapState = ({ currentTrip }) => ({
  timer: currentTrip.timer,
  startTime: currentTrip.startTime
});

export default connect(mapState)(TopBanner);
