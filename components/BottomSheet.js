import React, {useState} from 'react'
import RecordButton from './RecordButton';
import { StyleSheet, View, Picker} from 'react-native';
import Modal from "react-native-modal";
import {Text, Icon} from 'react-native-elements'


const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height: 'auto',
    backgroundColor: 'white',
    position: 'absolute',
    bottom:0
  },
  modal:{
    backgroundColor: 'white',
  }
});


export default function BottomSheet(){

  const [mode, setMode] = useState('Car');
  const [tripPurpose, setTripPurpose] = useState('Commute');
  const [purposeModal, setPurposeModal] = useState(false);
  const [modeModal, setModeModal] = useState(false);
  const usePurpose = (purpose) => {
    setPurposeModal(!purposeModal);
    setTripPurpose(purpose);
  }
  const useMode = (mode) => {
    setModeModal(!modeModal);
    setMode(mode);
  }
  const purposeIcons = {
    'Commute': <Icon
                  key = 'briefcase'
                  type = 'feather'
                  name = 'briefcase'
                  onPress = {()=> usePurpose('Commute')}
                  />,
    'Shopping': <Icon
                  key = 'shopping-cart'
                  type = 'feather'
                  name = 'shopping-cart'
                  onPress = {()=> usePurpose('Shopping')}
                  />,
  }
  const modeIcons = {
    'Car': <Icon
              key = 'car'
              type = 'material-community'
              name = 'car'
              onPress = {()=> useMode('Car')}
              />,
  'Subway': <Icon
              key = 'subway'
              type = 'material-community'
              name = 'subway'
              onPress = {()=> useMode('Subway')}
              />,
  };
  return (
    <View
      style = {styles.container}
      >
      <View>
        {purposeIcons[tripPurpose]}
        <Text>
          Purpose
        </Text>
      </View>
      <View>
        {modeIcons[mode]}
        <Text>
          Purpose
        </Text>
      </View>


        <Modal
          onBackdropPress={()=> setPurposeModal(!purposeModal)}
          isVisible={purposeModal}>
          <View style={styles.modal}>
            {Object.values(purposeIcons).map(icon => icon)}
          </View>
        </Modal>
        <Modal
          onBackdropPress={()=> setModeModal(!modeModal)}
          isVisible={modeModal}>
          <View style={styles.modal}>
          {Object.values(modeIcons).map(icon => icon)}
          </View>
        </Modal>
      <RecordButton />
    </View>
  )
}
