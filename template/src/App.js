import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {Header, Footer} from './layout';

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
            <button>You</button>
            <input type='text'></input>
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <h1>
                    Core content
                  </h1>
                </React.Fragment>
              )}
            />

            <Footer/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
