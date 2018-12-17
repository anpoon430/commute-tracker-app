const initialState = {
  tripPurpose: 'Commute',
  mode: 'Car',
  recording: false,
  path: [],
  startTime: null,
  endTime: null,
};

const SET_TRIP_PURPOSE = 'SET_TRIP_PURPOSE';

//actions
export const setTripPurpose = (tripPurpose) => ({
  type: SET_TRIP_PURPOSE,
  tripPurpose
})



//reducer
export default function reducer(state = initialState, action){
  switch(action.type){
    case SET_TRIP_PURPOSE:
      return {
        ...state,
        tripPurpose: action.tripPurpose
      }
      default:
        return state
  }
}
