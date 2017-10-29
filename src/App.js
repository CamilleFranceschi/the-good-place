import React, { Component } from 'react';
import './App.css';
import Place from './components/place';
// https://dribbble.com/shots/1971323-Real-Estate-App/attachments/343593

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: []
    };
  }
  componentDidMount() {
    fetch("https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json")
      .then(response => response.json())
      .then((data) => {
        this.setState({
          places: data,
        })
      })
  }

  render() {
  const places = fetch("https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json")
    .then(response => response.json());
    return (
      <div className="App">
        <div className="main">
          <div className="places">
            {this.state.places.map((place)=> {
              return <Place place={place} key={place.name}/>
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
