import React from 'react';
import './index.css';

const StrictBTN = (props) => {
    return (
        <div onClick={props.onClick} className="StrictBTN"></div>
    );
}

export default StrictBTN;   