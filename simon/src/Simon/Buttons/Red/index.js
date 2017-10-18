import React from 'react';
import './index.css';

const Red = (props) => (
    <div onMouseUp={props.onMouseUp} onMouseDown ={props.onClick} className = {"red button " + (props.isLighten ? "redLighten" : '')}></div>
);

export default Red; 