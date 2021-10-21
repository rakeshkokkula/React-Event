import foodItems from "../foodItems";

const initialState = {
  tPrice: 0,
  sItem: [],
  cartStat: false
};

export default function itemReducer(state=initialState , action) {
  switch(action.type){
  case 'ADD_ITEMS': 
    return {
      ...state,
      sItem: state.sItem
        ? state.sItem.concat(foodItems[action.payload - 1])
        : foodItems[action.payload.fno - 1],
      tPrice: state.tPrice + foodItems[action.payload - 1].price
    }
  case 'DELETE_ITEMS': 
    return {
      ...state,
      sItem: state.sItem.filter(
        (item) => item !== foodItems[action.payload - 1]
      ),
      tPrice: state.tPrice - foodItems[action.payload - 1].price,
    } 
  case 'GO_TO_CART': 
    return {
      ...state,
      cartStat: true,
    }
  default:return { ...state}
 }
}
