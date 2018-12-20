import React, {useState} from 'react'
import { StyleSheet, Text, View, Picker} from 'react-native';
import { connect } from 'react-redux';
import { Header } from 'react-native-elements'
import { timestampToString, msToTime } from '../utils/utils';

const styles = StyleSheet.create({
  container:{
   backgroundColor: 'white',
   height: 200,
   justifyContent: 'center',
   alignItems: 'center'
  }
})

function TopBanner(props){


  return (
   <View style = {styles.container}>
     <Text>
       {msToTime(props.timer)}
     </Text>
   </View>
  )
}

const mapState = ({currentTrip}) => ({
  timer: currentTrip.timer
});

export default connect(mapState)(TopBanner);
