const initialState = {
  total_price: 0,
  Items: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        Items: [...state.Items, action.payload],
        total_price: state.total_price + action.payload.price,
      };
    case "DELETE_ITEM":
      return {
        ...state,
        Items: state.Items.filter((item) => item.id !== action.payload.id),
        total_price: state.total_price - action.payload.price,
      };
    default:
      return state;
  }
}
