import React, {useState} from 'react'
import RecordButton from './RecordButton';
import { StyleSheet, Text, View, Picker} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    backgroundColor: 'white',
    position: 'absolute',
    bottom:0
  }
});

export default function BottomSheet(){
  const [selected, setSelected] = useState("Commute")
  return (
    <View
      style = {styles.container}
      >
      <RecordButton />
      <Text>
        Purpose of trip:
      </Text>
      <Picker
        style={{width: '50%' }}
        selectedValue={selected}
        onValueChange={setSelected}
        >
        <Picker.Item label="Commute" value="Commute" />
        <Picker.Item label="Shopping" value="Shopping" />
        <Picker.Item label="Social" value="Social" />
        <Picker.Item label="Food" value="Food" />
        <Picker.Item label="Errand" value="Errand" />
      </Picker>
      <Text>
        Mode:
      </Text>
      <Picker
        style={{width: '50%' }}
        selectedValue={selected}
        onValueChange={setSelected}
        >
        <Picker.Item label="Car" value="Car"/>
        <Picker.Item label="Subway" value="Subway" />
        <Picker.Item label="Train" value="Train" />
        <Picker.Item label="Walk" value="Walk" />
        <Picker.Item label="Bus" value="Bus" />
        <Picker.Item label="Bike" value="Bike" />
      </Picker>
    </View>
  )
}
