import React, { Component } from 'react';
import "./place.css";


class Place extends Component {

  render () {
   const style = {
      backgroundImage: `url('${this.props.place.imageUrl}')`
    };

    return (
      <div className="place">
        <div className="place-picture" style={style}></div>
        <div className="place-title">{this.props.place.price}$ - {this.props.place.name}</div>
      </div>
    );
  }
}

export default Place;
