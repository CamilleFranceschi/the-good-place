import React, { Component } from "react";
import "./filter.css"

class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <input type="checkbox" name={this.props.name} onChange={this.props.handleChange}/>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default Filter;
