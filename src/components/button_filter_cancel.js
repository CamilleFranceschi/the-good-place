import React, {Component} from 'react';

class ButtonFilterCancel extends Component {
  render () {
    return (
      <div onClick={this.props.onClick}>Cancel</div>
    );
  }
}
export default ButtonFilterCancel;