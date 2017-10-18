import React from 'react';
import './index.css';

const Blue = (props) => (
    <div onMouseUp={props.onMouseUp} onMouseDown ={props.onClick} className = {"blue button " + (props.isLighten ? "blueLighten" : '')}></div>
);

export default Blue;