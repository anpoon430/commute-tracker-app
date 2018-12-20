import React, {useState} from 'react'
import { StyleSheet, Text, View} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { accent } from '../styles';
import { setStartTime, toggleRecording, updateTimer } from '../redux/currentTrip';
import { connect } from 'react-redux';
import { timestampToString } from '../utils/utils';


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

function RecordButton(props){
  const [timerId, setTimerId] = useState(null);

  function startTimer(){
    let id = setInterval(() => {
      props.setTimer()
    }, 1000);
    setTimerId(id);
  }

  function stopTimer(){
    clearInterval(timerId);
    setTimerId(null);
  }

  function handleRecord(){
    if(props.startTime === null){
      startTimer();
      props.startRecord();
    } else {
      if (props.isRecording && timerId) {
        stopTimer();
      } else {
        startTimer();
      }
      props.toggleRecord();
    }
  }

  return(
    <View
        style = {styles.container}
        pointerEvents='box-none'
        >
        {props.isRecording ?
        (<Icon
          name = 'pause'
          type = 'font-awesome-5'
          onPress={() => handleRecord()}
          raised
          reverse
          color = {accent}
          />) :

        (<Button
          buttonStyle= {styles.recordBtn}
          onPress={() => handleRecord()}
          raised
          borderRadius={500}
          />)}
      </View>
  )
}

const mapState = ({currentTrip}) => ({
  isRecording: currentTrip.recording,
  startTime: currentTrip.startTime,
  timer: currentTrip.timer
});

const mapDispatch = dispatch => ({
  startRecord(){
    dispatch(setStartTime(Date.now()))
  },
  toggleRecord(){
    dispatch(toggleRecording())
  },
  setTimer(){
    dispatch(updateTimer())
  }
})

export default connect(mapState, mapDispatch)(RecordButton)
