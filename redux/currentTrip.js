const initialState = {
  tripPurpose: 'Commute',
  mode: 'Car',
  recording: false,
  path: [],
  startTime: null,
  endTime: null,
  timer: 0,
  timerId: null
};

const SET_TRIP_PURPOSE = 'SET_TRIP_PURPOSE';
const TOGGLE_RECORDING = 'TOGGLE_RECORDING';
const SET_START_TIME = 'SET_START_TIME';
const UPDATE_TIMER = 'UPDATE_TIMER';

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

export const updateTimer = () => ({
  type: UPDATE_TIMER,
})



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
        recording: true,
        startTime: action.time
      }
    case UPDATE_TIMER:
      return {
        ...state,
        timer: state.timer + 1000,
      }
      default:
        return state
  }
}
