import React, { Component } from 'react';
import './button_filter.css'

class ButtonFilter extends Component {
  render() {
    return(
      <div className="button_filter" onClick={this.props.onClick}>{this.props.name}</div>
    );
  }
}

export default ButtonFilter;