import React, { Component } from 'react';
import './button_filter.css'

const ButtonFilter = ({onClick, name}) => {
  return <div className="button_filter" onClick={onClick}>{name}</div>;
}

export default ButtonFilter;