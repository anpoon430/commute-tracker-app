import { createStore, combineReducers, applyMiddleware } from 'redux'

import currentTrip from './CurrentTrip';
import trips from './Trips';
import stats from './Stats';
import user from './User';

const reducer = combineReducers({
  currentTrip,
  trips,
  stats,
  user
})

export default createStore(reducer)
