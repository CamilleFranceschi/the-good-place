import React, {Component} from 'react';
import {connect} from 'react-redux';

class PlaceDetail extends Component {
  render() {
    if(!this.props.place) {
      return <div>select a book</div>
    }
    return (
      <div>
      {this.props.place.imageUrl}
      </div>
    );
  }
}

function mapStateToprops(state) {
  return {
    place: state.selectedPlace
  }
}

export default connect(mapStateToprops)(PlaceDetail);