import React, { Component } from 'react';
import './App.css';
import Flat from './components/flat';
// https://dribbble.com/shots/1971323-Real-Estate-App/attachments/343593

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="flats">
            <Flat className="flat"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
