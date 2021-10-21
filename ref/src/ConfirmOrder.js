import React from "react";
import { useSelector } from "react-redux";

export function ConfirmOrder() {
  const addSelector = useSelector((state) => state.cartReducer.address);
  const itemSelector = useSelector((state) => state.itemReducer.sItem);
  const priceSelector = useSelector((state) => state.itemReducer.tPrice);
  
  
  return (
    <div>
      <h2>Confirming Details here</h2>
      <table className="table table-bordered offset-2">
        <tbody className="table-bordered">
          {itemSelector.map((item) => (
            <tr>
              <td>{item.itemName}</td>
              <td>{item.price}</td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>{priceSelector}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <header>Address:</header>
        <p>{addSelector}</p>
      </div>
    </div>
  );
}
