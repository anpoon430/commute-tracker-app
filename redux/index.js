import { createStore, combineReducers, applyMiddleware } from 'redux'

import currentTrip from './currentTrip';
import trips from './trips';
import stats from './stats';
import user from './user';

const reducer = combineReducers({
  currentTrip,
  trips,
  stats,
  user
})

export default createStore(reducer)
