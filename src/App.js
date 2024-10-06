import React from "react";
import './App.css';
import Header from './Header';
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Routes }
from "react-router-dom";
import Checkout from "./Checkout";
import Subtotal from "./Subtotal";
function App()  {
  return (
    //BEM 
    <Router>
     <div className="app">
       <Routes>
        <Route path='/' element={[<Header/>, <Home/>]}/>
        <Route path="/checkout10" element={[<Header />,<h1>THIS IS CHECKOUT PAGE</h1>]} />
        <Route path="/Checkout" element={[ <Checkout />]}/>

       </Routes>
        
     </div>
    </Router>
 );
}

export default App;
