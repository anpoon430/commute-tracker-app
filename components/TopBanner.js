import React, {useState} from 'react'
import { StyleSheet, Text, View, Picker} from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container:{
    height: '8%',
    width: '100%',

  }
})

function TopBanner(props){

  return (
    <View style = {styles.container}>
      <Text>
        {/* {props.tripPurpose} */}
      </Text>
    </View>
  )
}

const mapState = () => ({

})

export default TopBanner
