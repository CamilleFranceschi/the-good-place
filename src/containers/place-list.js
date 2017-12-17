import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchPlaces } from '../actions/index';
import { bindActionCreators } from 'redux';
import Place from '../containers/place';

class PlaceList extends Component {
  componentWillMount() {
    this.props.fetchPlaces();
  }

  renderList() {
    return this.props.places.map((place, index) => {
      return (
        <li key={index}><Place place={place} /></li>
      );
    }
  )};


  render() {
    console.log('places', this.props.places);
    return (
      <ul >
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    places: state.places
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPlaces: fetchPlaces }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceList);