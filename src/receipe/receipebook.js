import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Receipebook.css";

function Recipebook() {
  const receipeState = useSelector((state) => state.receipe);

  return (
    <div className="container">
      <h1>Recipe Book List</h1>
      <div clas="row">
        {receipeState?.receipes.map((post) => {
          return (
            <div key={post.id}>
              <div className="receipe">
                <Link to={`/receipe/${post.id}`}>
                  <div className="col-12">
                    <img src={post.image} className="Image" />
                  </div>
                </Link>
                <p>{post.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Recipebook;
