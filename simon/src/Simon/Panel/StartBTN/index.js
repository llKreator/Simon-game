import React from 'react';
import './index.css';

const StartBTN = (props) => {
    return (
        <div onClick={props.onClick} className="StartBTN"></div>
    );
}

export default StartBTN;