import React from 'react';
import './index.css';

const OnOffBTN = (props) => {
    return (
        <button onClick={props.onOffClick} className={"onOffBTN " + (props.onOff === 'On' ? 'On' : 'Off')}  >
            {props.onOff}
        </button >
    );
}

export default OnOffBTN;