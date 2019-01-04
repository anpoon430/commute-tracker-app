import React, {Fragment} from 'react';
import { StyleSheet, View} from 'react-native';
import { Text, Button, Card, SearchBar, List, ListItem, Icon, Header } from 'react-native-elements'
import TripDetail from '../components/TripDetail';
import {createStackNavigator} from 'react-navigation';
import {tripsList} from '../seed';


const styles = StyleSheet.create({

});




function Trips(props){

  return (
    <View>
      <List>
        {tripsList.map((trip, i) => {
          return (
            <ListItem
              onPress = {() => props.navigation.navigate('TripDetails')}
              roundAvatar
              key = {i}
              title = {`${Math.round((trip.duration)/(1000*60))} mins ${trip.tripPurpose} by ${trip.mode}`}
            />)
        })}

      </List>


    </View>
  )
}


const TripStackNav = createStackNavigator(
  {
    Trips: Trips,
    TripDetails: TripDetail
  },
  {
    initialRouteName: "Trips"
  }
);

export default TripStackNav;
