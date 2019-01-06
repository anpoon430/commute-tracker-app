import React, {Fragment} from 'react';
import { StyleSheet, View} from 'react-native';
import { Text, Button, Card, SearchBar, List, ListItem, Icon, Header } from 'react-native-elements'
import TripDetail from '../components/TripDetail';
import {createStackNavigator} from 'react-navigation';
import {tripsList} from '../seed';
import { setSelected } from '../redux/trips';
import { connect } from 'react-redux';

const styles = StyleSheet.create({

});




function Trips(props){
  const  handleTripSelect = (index) => {
    props.setTrip(index);
    props.navigation.navigate('TripDetails')
  }
  return (
    <View>
      <List>
        {tripsList.map((trip, i) => {
          return (
            <ListItem
              onPress = {() => handleTripSelect(i)}
              roundAvatar
              key = {i}
              title = {`${Math.round((trip.duration)/(1000*60))} mins ${trip.tripPurpose} by ${trip.mode}`}
            />)
        })}

      </List>
      <Button
        title = 'A BUTTON'
        />

    </View>
  )
}

const mapDispatch = dispatch => ({
  setTrip(index){
    dispatch(setSelected(index))
  }
})
const ConnectedTrips = connect(null, mapDispatch)(Trips)

const TripStackNav = createStackNavigator(
  {
    Trips: ConnectedTrips,
    TripDetails: TripDetail
  },
  {
    initialRouteName: "Trips"
  }
);

export default TripStackNav;
