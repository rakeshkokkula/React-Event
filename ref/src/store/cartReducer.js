const initialCState = {
  address: "Address not added",
};

export default function cartReducer(state = initialCState, action) {
  switch(action.type){
  case 'ADD_ADDRESS': 
    return {
      address: action.payload,
    }
   default: 
    return {
      ...state,
    }
  }
}
