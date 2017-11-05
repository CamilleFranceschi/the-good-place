import React, {Component} from "react";
import "./map_info_window.css";

class MapInfoWindow extends Component {
  render() {
    let classes= "map_info_window"
    if (this.props.opened) {
      classes = classes + " opened"
    }
    return (
      <div className={classes}>{this.props.place.price}$ùùùù</div>
    );
  }
}

export default MapInfoWindow;


