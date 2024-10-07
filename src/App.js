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
          <Route path="/" element={[<Header key="header" />, <Home key="home" />]} />
          <Route path="/checkout" element={[<Header key="header" />, <Checkout key="checkout" />]} />
        </Routes>
      </div>
    </Router>
  );
}  

export default App;
