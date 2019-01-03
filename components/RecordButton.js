import React, {Component} from 'react'
import { StyleSheet, Text, View, Alert} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { accent } from '../styles';
import { toggleRecord } from '../redux/currentTrip';
import { connect } from 'react-redux';



const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  recordBtn:{
    borderColor: 'white',
    borderWidth:5,
    backgroundColor: accent,
    width:70,
    height:70
  },
});

class RecordButton extends Component{


  componentWillUnmount() {
    clearInterval(this.props.timerId);
  }
  render(){
    return(
      <View
          style = {styles.container}
          pointerEvents='box-none'
          >
          {this.props.isRecording ?
          (<Icon
            name = 'pause'
            type = 'font-awesome-5'
            onPress={this.props.toggleRecord}
            raised
            reverse
            color = {accent}
            />) :

          (<Button
            buttonStyle= {styles.recordBtn}
            onPress={this.props.toggleRecord}
            raised
            borderRadius={500}
            />)}
        </View>
    )
  }
}

const mapState = ({currentTrip}) => ({
  isRecording: currentTrip.recording,
  timer: currentTrip.timer,
  timerId: currentTrip.timerId
});

const mapDispatch = dispatch => ({
  toggleRecord(){
    dispatch(toggleRecord())
  },
  setStartLoc(){

  },
  setEndLoc(){

  }
})

export default connect(mapState, mapDispatch)(RecordButton)
