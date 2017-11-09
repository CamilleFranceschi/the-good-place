import React, {Component} from "react";
import "./marker.css";

class Marker extends Component {

  render () {
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

export default Marker;
// https://github.com/istarkov/google-map-react-examples/blob/master/web/flux/components/examples/x_events/events_map_page.jsx
