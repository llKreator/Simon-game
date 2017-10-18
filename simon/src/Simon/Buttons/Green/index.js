import React from 'react';
import './index.css';

const Green = (props) => (
    <div onMouseUp={props.onMouseUp} onMouseDown ={props.onClick} className = {"green button " + (props.isLighten ? "greenLighten" : '')}></div>
);

export default Green;   