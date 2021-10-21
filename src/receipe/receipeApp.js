import React from "react";
import Recipebook from "./receipebook";
import RecipeDetails from "./receipeDetails";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./cart";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Recipebook} />
          <Route path="/receipe/:id" component={RecipeDetails} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    </Provider>
  );
};
export default App;
