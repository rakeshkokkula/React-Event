import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import { ItemList } from './ItemList';
import {Cart} from './Cart';
import { ConfirmOrder } from './ConfirmOrder';

function App() {

  return (
    <div className="App" id="app">
      <Router>
        <Route exact path='/' component={ItemList}></Route>
        <Route exact path='/cart' component={Cart}></Route>
        <Route exact path='/confirmorder' component={ConfirmOrder}></Route> 
      </Router>  
    </div>
  );
}

export default App;
