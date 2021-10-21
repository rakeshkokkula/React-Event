import data from "../data.json";

const initialState = {
  receipes: data,
  loading: false,
  error: "",
};

const receipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RECEIPES":
      return {};
    default:
      return state;
  }
};

export default receipeReducer;
