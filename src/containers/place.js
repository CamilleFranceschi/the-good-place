import React, { Component } from 'react';
import "./place.css";
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectPlace } from '../actions/index';

class Place extends Component {

  handleHover = () => {
    this.props.selectPlace(this.props.place)
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


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectPlace: selectPlace }, dispatch)
}

export default connect(null, mapDispatchToProps)(Place);
