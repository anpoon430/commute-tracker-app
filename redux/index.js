import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools';

import currentTrip from './currentTrip';
import trips from './trips';
import stats from './stats';
import user from './user';
import thunk from 'redux-thunk';


const reducer = combineReducers({
  currentTrip,
  trips,
  stats,
  user
})


export default createStore(reducer,
  composeWithDevTools(applyMiddleware(thunk))
  )
