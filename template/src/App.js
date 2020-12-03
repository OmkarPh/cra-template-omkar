import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {Header, Footer} from './layout';
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
            <Route
              exact
              path="/"
              render={Home}
            />

            <Footer/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
