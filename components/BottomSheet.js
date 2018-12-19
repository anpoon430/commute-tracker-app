import React, {useState} from 'react'
import RecordButton from './RecordButton';
import { StyleSheet, View, Picker} from 'react-native';
import Modal from "react-native-modal";
import {Text, Icon} from 'react-native-elements'
import { accent } from '../styles';


const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height: 'auto',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom:0,
    borderRadius: 10,
    padding: 20
  },
  modal:{
    backgroundColor: 'white',
  },
  selection:{
    flexDirection: 'column',
    fontSize: 30,

  },
  headerContainer:{
    flexDirection:'row',
    justifyContent:'center'
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
  const useMode = (modeSelected) => {
    setModeModal(!modeModal);
    setMode(modeSelected);
  }
  const purposeIcons = {
    'Commute': <Icon
                  reverse
                  raised
                  color = {accent}
                  key = 'briefcase'
                  type = 'feather'
                  name = 'briefcase'
                  onPress = {()=> usePurpose('Commute')}
                  />,
    'Shopping': <Icon
                  reverse
                  raised
                  color = {accent}
                  key = 'shopping-cart'
                  type = 'feather'
                  name = 'shopping-cart'
                  onPress = {()=> usePurpose('Shopping')}
                  />,
  }
  const modeIcons = {
    'Car': <Icon
              reverse
              raised
              color = {accent}
              key = 'car'
              type = 'material-community'
              name = 'car'
              onPress = {()=> useMode('Car')}
              />,
  'Subway': <Icon
              reverse
              raised
              color = {accent}
              key = 'subway'
              type = 'material-community'
              name = 'subway'
              onPress = {()=> useMode('Subway')}
              />,
  };
  return (
    <View
    pointerEvents='box-none'
      style = {styles.container}
      >
      <View style = {styles.headerContainer}>
        <View style = {styles.selection}>
          {purposeIcons[tripPurpose]}
          <Text>
            Purpose
          </Text>
        </View>
        <View style = {styles.selection}>
          {modeIcons[mode]}
          <Text>
            Purpose
          </Text>
        </View>
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
