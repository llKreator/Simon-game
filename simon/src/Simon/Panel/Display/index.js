import React from 'react';
import './index.css';

const Display = (props) => {
    return (
        <div className="display">
            <div>{props.onOff === 'On' ? props.value : null}</div>
        </div>
    );
}

export default Display;