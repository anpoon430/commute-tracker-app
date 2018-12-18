import React, {useState} from 'react'
import { StyleSheet, Text, View, Picker} from 'react-native';
import { connect } from 'react-redux';
import { Header } from 'react-native-elements'

const styles = StyleSheet.create({
  container:{
   backgroundColor: 'white'
  }
})

function TopBanner(props){

  return (
    <Header
    backgroundColor= 'white'
    leftComponent={{ icon: 'menu', color: 'black' }}
    centerComponent={{ text: 'MY TITLE', style: { color: 'black' } }}
    // rightComponent={{ icon: 'home', color: '#fff' }}
  />
  )
}

const mapState = () => ({

})

export default TopBanner
