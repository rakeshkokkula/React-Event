import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const cartState = useSelector((state) => state.cart);
  const history = useHistory();
  const dispatch = useDispatch();

  const onRemoveItem = (e, item) => {
    e.preventDefault();
    dispatch({ type: "DELETE_ITEM", payload: item });
    history.push("/cart");
  };

  return (
    <div>
      <h1>Cart</h1>
      {cartState.Items.map((item) => {
        return (
          <div className="row card" key={item.id}>
            <img src={item.image} className="Image" />
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button
              onClick={(e) => onRemoveItem(e, item)}
              type="button"
              className="btn btn-danger w-25"
            >
              Remove from Cart
            </button>
          </div>
        );
      })}
      {cartState.Items.length > 0 ? (
        <Link to="/">
          <button type="button" className="btn btn-primary">
            Back
          </button>
        </Link>
      ) : (
        <h1>Empty Cart</h1>
      )}
    </div>
  );
};
export default Cart;
