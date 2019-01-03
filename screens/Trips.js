import React, {Fragment} from 'react';
import { StyleSheet, View} from 'react-native';
import { Text, Button, Card, SearchBar, List, ListItem, Icon } from 'react-native-elements'


const styles = StyleSheet.create({

});

const fakeData = [
  {
    origin: {lat: 22, lng: 104},
    destination: {lat: 22, lng: 104},
    startAddress: '123 Hacker Way, San Francisco',
    endAddress: '123 Hacker Way, San Francisco',
    startTime: 1530524144000,
    endTime: 1530527744000,
    duration: 3600000,
    tripPurpose: 'Commute',
    mode: 'Car',
  },
  {
    origin: {lat: 22, lng: 104},
    destination: {lat: 22, lng: 104},
    startAddress: '123 Hacker Way, San Francisco',
    endAddress: '123 Hacker Way, San Francisco',
    startTime: 1530524144000,
    endTime: 1530527744000,
    duration: 3600000,
    tripPurpose: 'Commute',
    mode: 'Car',
  },
  {
    origin: {lat: 22, lng: 104},
    destination: {lat: 22, lng: 104},
    startAddress: '123 Hacker Way, San Francisco',
    endAddress: '123 Hacker Way, San Francisco',
    startTime: 1530524144000,
    endTime: 1530527744000,
    duration: 3600000,
    tripPurpose: 'Commute',
    mode: 'Car',
  },
  {
    origin: {lat: 22, lng: 104},
    destination: {lat: 22, lng: 104},
    startAddress: '123 Hacker Way, San Francisco',
    endAddress: '123 Hacker Way, San Francisco',
    startTime: 1530524144000,
    endTime: 1530527744000,
    duration: 3600000,
    tripPurpose: 'Commute',
    mode: 'Car',
  },
  {
    origin: {lat: 22, lng: 104},
    destination: {lat: 22, lng: 104},
    startAddress: '123 Hacker Way, San Francisco',
    endAddress: '123 Hacker Way, San Francisco',
    startTime: 1530524144000,
    endTime: 1530527744000,
    duration: 3600000,
    tripPurpose: 'Commute',
    mode: 'Car',
  },
  {
    origin: {lat: 22, lng: 104},
    destination: {lat: 22, lng: 104},
    startAddress: '123 Hacker Way, San Francisco',
    endAddress: '123 Hacker Way, San Francisco',
    startTime: 1530524144000,
    endTime: 1530527744000,
    duration: 3600000,
    tripPurpose: 'Commute',
    mode: 'Car',
  },
  {
    origin: {lat: 22, lng: 104},
    destination: {lat: 22, lng: 104},
    startAddress: '123 Hacker Way, San Francisco',
    endAddress: '123 Hacker Way, San Francisco',
    startTime: 1530524144000,
    endTime: 1530527744000,
    duration: 3600000,
    tripPurpose: 'Commute',
    mode: 'Car',
  },
  {
    origin: {lat: 22, lng: 104},
    destination: {lat: 22, lng: 104},
    startAddress: '123 Hacker Way, San Francisco',
    endAddress: '123 Hacker Way, San Francisco',
    startTime: 1530524144000,
    endTime: 1530527744000,
    duration: 3600000,
    tripPurpose: 'Commute',
    mode: 'Car',
  },
  {
    origin: {lat: 22, lng: 104},
    destination: {lat: 22, lng: 104},
    startAddress: '123 Hacker Way, San Francisco',
    endAddress: '123 Hacker Way, San Francisco',
    startTime: 1530524144000,
    endTime: 1530527744000,
    duration: 3600000,
    tripPurpose: 'Commute',
    mode: 'Car',
  },
  {
    origin: {lat: 22, lng: 104},
    destination: {lat: 22, lng: 104},
    startAddress: '123 Hacker Way, San Francisco',
    endAddress: '123 Hacker Way, San Francisco',
    startTime: 1530524144000,
    endTime: 1530527744000,
    duration: 3600000,
    tripPurpose: 'Commute',
    mode: 'Car',
  },
]


export default function Trips(){

  return (
    <View>
      <List>
        {fakeData.map((trip, i) => {
          return (
            <ListItem
              roundAvatar
              key = {i}
              title = {`${Math.round((trip.duration)/(1000*60))} mins ${trip.tripPurpose} by ${trip.mode}`}
            />)
        })}

      </List>


    </View>
  )
}


