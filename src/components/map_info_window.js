import React, {Component} from "react";
import "./map_info_window.css";

class MapInfoWindow extends Component {
  render() {
    let classes= "map_info_window"
    if (this.props.visible) {
      classes = classes + " opened"
    } else {
      classes= "map_info_window"
    }

    if (this.props.visible) {
      return (
        <div className={classes}> {this.props.marker.name} </div>
      );
    } else {
      return <div></div>
    }
  }
}

export default MapInfoWindow;