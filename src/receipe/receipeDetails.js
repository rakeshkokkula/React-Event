import React from "react";
import "./recipedetails.css";
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function RecipeDetails() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const receipeState = useSelector((state) => state.receipe);
  const { receipes } = receipeState;
  const filterReceipe = receipes.find((i) => i.id === id) || {};
  const added = cartState.Items.find((i) => i.id === id);

  const onAddItem = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_ITEM", payload: filterReceipe });
    history.push("/cart");
  };

  const onRemoveItem = (e) => {
    e.preventDefault();
    dispatch({ type: "DELETE_ITEM", payload: filterReceipe });
    history.push("/cart");
  };
  return (
    <div>
      <div className="details">
        <h1>Details of {filterReceipe.name} Recipe</h1>
        <p>
          <b>Name :</b> {filterReceipe.name}
        </p>
        <p>
          <b>Type of Recipe : </b>
          {filterReceipe.type}
        </p>
        <p>
          <b>Description :</b> {filterReceipe.description}
        </p>
        <p>
          <b>Price of Recipe : </b>${filterReceipe.price}
        </p>
        <p>
          <b>Ingredients used : </b>
          {filterReceipe?.ingredients?.toString()}
        </p>
      </div>
      <div>
        <Link to="/">
          <button type="button" className="btn btn-primary">
            Back
          </button>
        </Link>
        {added ? (
          <button
            onClick={onRemoveItem}
            type="button"
            className="btn btn-danger"
          >
            Remove from Cart
          </button>
        ) : (
          <button onClick={onAddItem} type="button" className="btn btn-danger">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default RecipeDetails;
