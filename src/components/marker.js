import React, {Component} from "react";
import "./marker.css";
import {connect} from 'react-redux';


class Marker extends Component {

  render () {
    if(!this.props.place) {
      return <div></div>
    }
    let classes= "marker"

    if (this.props.selected) {
      classes = classes + " selected"
    }


    return (
      <div>
        <div className={classes} >{this.props.place.price}$</div>
      </div>
    );
  }
}

// export default Marker;
// https://github.com/istarkov/google-map-react-examples/blob/master/web/flux/components/examples/x_events/events_map_page.jsx

function mapStateToprops(state) {
  return {
    place: state.selectedPlace
  }
}

export default connect(mapStateToprops)(Marker);