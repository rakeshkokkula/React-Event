import React, { useState } from "react";
import { useDispatch, useStore } from "react-redux";
import { useHistory } from "react-router-dom";


import "./bootstrap.min.css";
import foodItems from "./foodItems";
import { ADD_ITEMS, CHANGE_QUANTITY, DELETE_ITEMS, GO_TO_CART } from "./store/actions/items.action";

export function ItemList() {
  const [fno, setNo] = useState(0);
  const dispatch = useDispatch();
  const history=useHistory();
  const store=useStore().getState();
  

  function option(sno) {
    setNo(sno);
  }

  function renderCart() {
    if(store.itemReducer.sItem.length!==0){
    dispatch(GO_TO_CART());
    history.push('/cart');
    }
    else{
    history.push('/cart');
    }
  }

  const addFood = (event) => {
    if (event.target.checked) {
      dispatch(ADD_ITEMS(fno));
    } else {
      dispatch(DELETE_ITEMS(fno));
    }
  };

  return (
    <div className="list">
      <h2>Order you Food</h2>
      <table className="table table-bordered offset-2">
        <thead>
          <th>S.No</th>
          <th>Item Name</th>
          <th>Price</th>
          <th>Status</th>
        </thead>
        {foodItems.map((item) => (
          <tbody>
            <tr onMouseOver={() => option(item.sNo)}>
              <td>{item.sNo}</td>
              <td>{item.itemName}</td>
              <td>{item.price}</td>
              <td>
                <label htmlFor="checkitem">Add</label>
                <input type="checkbox" id="checkitem" onClick={addFood}></input>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <button className="btn btn-primary" onClick={()=>renderCart()}>Add to Cart</button>
    </div>
  );
}
