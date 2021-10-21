import React, { useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";

import { useHistory } from "react-router-dom";
import "./cart.css";
import { ADD_ADDRESS } from "./store/actions/cart.action";

export function Cart() {
  const dispatch = useDispatch();
  const history=useHistory();
  const store=useStore();
  const [dis,en]=useState(true);

  const addAddress = (event) => {
    let add = event.target.value;
    dispatch(ADD_ADDRESS(add));
    en(false);
  };

  const statSelector = useSelector((state) => state.itemReducer.cartStat);
  const itemSelector = useSelector((state) => state.itemReducer.sItem);
  const priceSelector = useSelector((state) => state.itemReducer.tPrice);

  if (statSelector === true) {
    return (
      <div className="cartList">
        <h2>Cart Details</h2>
        <div className="card col-6 offset-3">
          {itemSelector.map((item) => (
            <div className="card-body row">
              <div className="col-8">{item.itemName}</div>
              <div className="col-4">{item.price}</div>
            </div>
          ))}
          <div className="card-footer row">
            <div className="col-8">Total</div>
            <div className="col-4">{priceSelector}</div>
          </div>
        </div>
        <fieldset className="addDetails">
          <label htmlFor="address">Enter Address Details : </label>
          <input
            type="text"
            id="address"
            value={store.address}
            onChange={addAddress}
          ></input>
        </fieldset>
        <button className="btn btn-success" onClick={()=>history.push('/confirmorder')} disabled={dis}>Deliver to this Address</button>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Cart Details</h2>
        <h4>No orders added yet!</h4>
        <div>
          <fieldset className="addDetails">
            <label htmlFor="address">Enter Address Details : </label>
            <input
              type="text"
              id="address"
              value={store.address}
              onChange={addAddress}
            ></input>
          </fieldset>
          <button className="btn btn-danger" onClick={()=>history.push('/confirmorder')} disabled={true}> Deliver to this Address</button>
        </div>
      </div>
    );
  }
}
