import { createStore, combineReducers, applyMiddleware } from 'redux'

import CurrentTrip from './CurrentTrip';
import Trips from './Trips';
import Stats from './Stats';
import User from './User';

const reducer = combineReducers({
  CurrentTrip,
  Trips,
  Stats,
  User
})

export default createStore(reducer)
