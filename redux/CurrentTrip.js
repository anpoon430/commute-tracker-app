const initialState = {
  tripPurpose: 'Commute',
  mode: 'Car',
  recording: false,
  path: [],
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

//actions

export const setTripPurpose = (tripPurpose) => ({
  type: SET_TRIP_PURPOSE,
  tripPurpose
});

export const toggleRecording = () => ({
  type: TOGGLE_RECORDING
});

export const setStartTime = time => ({
  type: SET_START_TIME,
  time
});

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
export const toggleRecord = () => (dispatch, getState) => {
  let id;
  console.log(getState().currentTrip.recording);
  if (getState().currentTrip.startTime === 0) dispatch(setStartTime(Date.now()));
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
      default:
        return state
  }
}
