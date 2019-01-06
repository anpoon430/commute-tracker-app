const initialState = {
  list: [],
  selected: 0, //index of selected tripItem
};



const SET_SELECTED = "SET_SELECTED";
const SET_TRIPS_LIST = "SET_TRIPS_LIST";



//actions


export const setSelected = index => ({
  type: SET_SELECTED,
  index
})

export const setTripsList = list => ({
  type: SET_TRIPS_LIST,
  list
})
 //thunks
const fetchTripsList = () => async dispatch => {
  try {
    //let res = await fetch()
    //const list = await res.json();
    // dispatch(setTripsList(list));
  } catch (error) {
    console.error(error);
  }
}

//reducer
export default function reducer(state = initialState, action){
  switch(action.type){
      case SET_SELECTED:
        return {
          ...state,
          selected: action.index
        }
      default:
        return state
  }
}
