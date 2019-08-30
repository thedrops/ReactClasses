import React, {Component} from 'react';
import Posts from './components/Posts';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class App extends React.Component{
  render(){
  return(
      <Router>
        <Route exact path="/posts" component={Posts}></Route>
      </Router> 
  )
  }
}


export default App;
