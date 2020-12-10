import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from "./components/Header/";
import Footer from "./components/Footer/";
import Home from './pages/Home';


import './App.css';

class App extends Component {
  state = {

  };
  render() {
    return ( 
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
                <Route exact path="/"> <Home/> </Route>
    
            <Footer/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
