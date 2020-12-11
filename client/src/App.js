import React from "react";
import {Switch, Route} from "react-router-dom";

import Header from './components/navigation/Header'

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

import Home from './pages/Home';


const App = () =>{
 return(
   <>
   <Header />
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/Login" component={Login}/>
    <Route exact path="/Register" component={Register}/>


  </Switch>
  </>
  )
}
   


export default App;