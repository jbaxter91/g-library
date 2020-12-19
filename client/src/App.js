import "./App.css";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from './pages/Search';
import React from 'react';
//import {AuthContext} from './Context/AuthContext';

function App() {
  //const {agent, setAgent, isAuthenticated, setIsAuthenticated} = useContext(AuthContext);

  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/search" exact component={Search} />
    </div>
  );
}

export default App;
