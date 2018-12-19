import React from 'react'
import { StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';
import { accent } from '../styles';
import { setStartTime } from '../redux/CurrentTrip';

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
  }
});

export default function RecordButton(props){

  return(
    <View
        style = {styles.container}
        pointerEvents='box-none'
        >
        <Button
          buttonStyle= {styles.recordBtn}
          onPress={props.handleRecord}
          raised
          borderRadius={500}
          />
      </View>
  )
}

const mapState = ({currentTrip}) => ({
  handleRecord(){

  }
})
