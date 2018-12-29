import Map from './screens/Map'
import Trips from './screens/Trips'
import Stats from './screens/Stats'
import {Feather} from '@expo/vector-icons'
import React from 'react'
import { Text } from 'react-native-elements'
import { View } from 'react-native'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createAppContainer} from 'react-navigation'
import { accent } from './styles';

const TabNav = createMaterialBottomTabNavigator({
  Map: { screen: Map, },
  // Trips: { screen: Trips},
  // Stats: { screen: Stats}
}, {
  initialRouteName: 'Map',
  activeColor: accent,
  inactiveColor: 'grey',
  barStyle: { backgroundColor: 'white' },
  defaultNavigationOptions:({navigation}) => ({
    tabBarIcon: ({focused, horizontal, tintColor}) => {
      const {routeName} = navigation.state;
      let iconName = {
        'Map': 'map',
        // 'Trips': ''
      }
      return <Feather
                name = {iconName[routeName]}
                color= {tintColor}
                size = {horizontal ? 20: 25 }
                />
    }
  }),
  tabBarOptions: {
    activeTintColor: accent,
    inactiveTintColor: 'gray',
  },
},
)

export default createAppContainer(TabNav)
