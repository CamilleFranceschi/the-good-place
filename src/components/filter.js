import React, { Component } from "react";
import "./filter.css"

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  componentWillMount() {
    this.setState({isChecked: this.props.checked});
  }

  onChange(e) {
    this.setState({isChecked: e});
    this.props.onChange(e);
  } 

  render() {
    return (
      <div className="filter">
        <input type="checkbox" checked={this.state.isChecked} name={this.props.name} onChange={e => this.onChange(e.target.checked) }/>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default Filter;
