import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Provider} from "react-redux";
import store from "./Store/Store";
import './App.css';

// page
import Home from "./Home/Home";
import OnlineProduct from "./OnlineProduct/index";
import List from "./List/List";
import Paid from "./Paid/Paid";
import Login from "./Login";

class App extends Component {
 
  render() {
    return (
      <Router>

    <nav class="navbar navbar-light bg-light justify-content-between">
      <Link to="/Home" class="navbar-brand">HOME</Link>
      <Link to="/Paid" class="navbar-brand">SUBSCRIPTIONS</Link>
      <Link to="/List" class="navbar-brand">CHANNELLIST</Link>

    </nav>


<Route path="/" component={Home} exact />
<Route path="/Home" component={Home} exact />
<Route path="/List" component={List} exact />
<Route path="/List/:id" component={OnlineProduct} exact />
<Route path="/Paid" component={Paid} exact />
<Route path="/Login" component={Login} exact />



</Router>

    );
  }
}

function AppWithStore(){
  return <Provider store={store}>
    <App />
  </Provider>
}

export default AppWithStore;
