import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools';

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

export default createStore(reducer,
  devToolsEnhancer()
  )
