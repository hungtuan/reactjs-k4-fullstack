const initialState = {
  MAX_NUMBER: 2,
  MIN_NUMBER: 1,
  MAX_TURN: 7,
};

const configReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MAX_NUMBER":
      return { ...state, MAX_NUMBER: action.payload };
    default:
      return state;
  }
};

export default configReducer;
