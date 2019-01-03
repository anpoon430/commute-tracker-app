import {Alert} from 'react-native';
import { Constants, Location, Permissions } from 'expo';

const initialState = {
  tripPurpose: 'Commute',
  mode: 'Car',
  recording: false,
  origin: 0, //starting coordinates
  destination: 0, //ending coordinates
  startAddress: '',
  endAddress: '',
  startTime: 0,
  endTime: 0,
  timer: 0,
  lastStopped: 0,
  timerId: 0,
  initial: 0
};

const SET_TRIP_PURPOSE = 'SET_TRIP_PURPOSE';
const TOGGLE_RECORDING = 'TOGGLE_RECORDING';
const SET_START_TIME = 'SET_START_TIME';
const UPDATE_TIMER = 'UPDATE_TIMER';
const SET_INITIAL = 'SET_INITIAL';
const STOP_TIMER = 'STOP_TIMER';
const SET_ORIGIN = 'SET_ORIGIN';
const SET_DEST = 'SET_DEST';

//actions

export const setTripPurpose = (tripPurpose) => ({
  type: SET_TRIP_PURPOSE,
  tripPurpose
});

export const toggleRecording = () => ({
  type: TOGGLE_RECORDING
});

export const setStartTime = (time) => ({
  type: SET_START_TIME,
  time,
});

export const setOrigin = origin => ({
  type: SET_ORIGIN,
  origin
})

export const updateTimer = time => ({
  type: UPDATE_TIMER,
  time
})

export const setInitial = (time, id) => ({
  type: SET_INITIAL,
  time,
  id
})


export const stopTimer = () => ({
  type: STOP_TIMER
})

//thunks
const _getLocationAsync = async () => {
  try {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      Alert.alert(
        'Your location is not available',
        'Please enable location services',
        [
          {text: 'OK', onPress: () => console.log('OK pressed')},
        ],
        { cancelable: true }
      )
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log('MY LOCATION IS', location);
    return location;
  } catch (error) {
    console.error(error);
  }
};

export const toggleRecord = () => async(dispatch, getState) => {
  let id;
  if (getState().currentTrip.startTime === 0) {
    dispatch(setStartTime(Date.now()));
    try {
      const loc = await _getLocationAsync();
      dispatch(setOrigin(loc));
    } catch (error) {
      console.error(error);
    }
  }
  if (getState().currentTrip.recording === false){
    id = setInterval(() => {
      dispatch(updateTimer(Date.now()));
    }, 1000);
    dispatch(setInitial(Date.now(), id));
  } else {
    clearInterval(getState().currentTrip.timerId);
    dispatch(stopTimer());
  }
  dispatch(toggleRecording());
}


//reducer
export default function reducer(state = initialState, action){
  switch(action.type){
    case SET_TRIP_PURPOSE:
      return {
        ...state,
        tripPurpose: action.tripPurpose
      }
    case TOGGLE_RECORDING:
      return {
        ...state,
        recording: !state.recording,
      }
    case SET_START_TIME:
      return {
        ...state,
        startTime: action.time,
      }
    case UPDATE_TIMER:
      return {
        ...state,
        timer: action.time - state.initial + state.lastStopped
      }
    case SET_INITIAL:
      return {
        ...state,
        initial: action.time,
        timerId: action.id
      }
    case STOP_TIMER:
      return {
          ...state,
          initial: 0,
          lastStopped: state.timer
      }
    case SET_ORIGIN:
      return {
        ...state,
        origin: action.origin
      }
      default:
        return state
  }
}
