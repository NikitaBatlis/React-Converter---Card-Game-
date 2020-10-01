
import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";
import './App.css';

import Converter from './Components/Converter';
import GameBoard from './Components/GameBoard';
import Menu from './Components/Menu';


class App extends Component {
  render() {
    return (
      <div className="App">

      <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
      integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
      crossOrigin="anonymous"
      />
        <Router>
          <div>
            <Menu />
            <Switch>
              <Route path="/converter" component={Converter} />
              <Route path="/gameboard" component={GameBoard} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;