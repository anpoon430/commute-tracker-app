import Map from './screens/Map'
import Trips from './screens/Trips'
import Stats from './screens/Stats'
import {Feather, Entypo, Ionicons} from '@expo/vector-icons';
import React from 'react'
import { Text } from 'react-native-elements'
import { View } from 'react-native'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createAppContainer} from 'react-navigation'
import { accent } from './styles';
import store from './redux';
import { Provider} from 'react-redux';



const TabNav = createMaterialBottomTabNavigator({
  Map: { screen: Map, },
  Trips: { screen: Trips},
  Stats: { screen: Stats}
}, {
  initialRouteName: 'Map',
  activeColor: accent,
  inactiveColor: 'grey',
  barStyle: { backgroundColor: 'white' },
  defaultNavigationOptions:({navigation}) => ({
    tabBarIcon: ({focused, horizontal, tintColor}) => {
      const {routeName} = navigation.state;
      let iconName = {
        'Map': <Feather
                  name = 'map'
                  color= {tintColor}
                  />,
        'Trips': <Entypo
                    name = 'flow-line'
                    color = {tintColor}
                  />,
        'Stats': <Ionicons
                    name = 'ios-stats'
                    color = {tintColor}
                  />
      }
      return iconName[routeName]
    }
  }),
  tabBarOptions: {
    activeTintColor: accent,
    inactiveTintColor: 'gray',
  },
},
);

const RootNav = createAppContainer(TabNav);
export default function App(){
  return (
    <Provider store = {store} >
      <RootNav />
    </Provider>
  )
}


