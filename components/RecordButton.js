import React from 'react'
import { StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  recordBtn:{
    borderColor: 'white',
    borderWidth:5,
    backgroundColor:'red',
    width:70,
    height:70
  }
});

export default function RecordButton(){
  function handleRecord(){

  }
  return(
    <View
        style = {styles.container}
        pointerEvents='box-none'
        >
        <Button
          buttonStyle= {styles.recordBtn}
          onPress={handleRecord}
          raised
          borderRadius={500}
          />
      </View>
  )
}
