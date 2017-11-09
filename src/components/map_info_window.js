import React, {Component} from "react";
import "./map_info_window.css";

class MapInfoWindow extends Component {
  render() {
        let classe= "map_info_window"
      if (this.props.clicked) {
      classe = classe + " opened"
    }
    return (
      <div className={classe} >$ùùùù</div>
    );
  }
}

export default MapInfoWindow;


