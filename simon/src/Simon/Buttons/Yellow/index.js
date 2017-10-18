import React from 'react';
import './index.css';

const Yellow = (props) => (
    <div onMouseUp={props.onMouseUp} onMouseDown ={props.onClick} className = {"yellow button " + (props.isLighten ? "yellowLighten" : '')}></div>
);

export default Yellow;