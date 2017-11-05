import React, { Component } from 'react';
import "./place.css";


class Place extends Component {

  handleHover = () => {
    this.props.selectPlace(this.props.place);
  }


  render () {
   const style = {
      backgroundImage: `url('${this.props.place.imageUrl}')`
    };


    return (
      <div className="place" onMouseEnter={this.handleHover}>
        <div className="place-picture" style={style}></div>
        <div className="place-title">{this.props.place.price}$ - {this.props.place.name}</div>
      </div>
    );
  }
}


export default Place;
