import React, { Component } from 'react';

class ButtonFilterApply extends Component {
  render () {
    return (
      <div onClick={this.props.onClick}>Apply</div>
    );
  }
}

export default ButtonFilterApply; 