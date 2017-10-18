import React from 'react';
import './index.css';
import Green from './Green/index.js';
import Red from './Red/index.js';
import Yellow from './Yellow/index.js';
import Blue from './Blue/index.js';
import './index.css';

const Buttons = (props) => {
    return (
        <div className="buttons">
            <div className="row">
                <Green onMouseUp={props.onMouseUp} onClick={props.onClick} isLighten={props.isGreen}/>
                <Red onMouseUp={props.onMouseUp} onClick={props.onClick} isLighten={props.isRed} />
            </div>
            <div className="row">
                <Yellow onMouseUp={props.onMouseUp} onClick={props.onClick} isLighten={props.isYellow} />
                <Blue onMouseUp={props.onMouseUp} onClick={props.onClick} isLighten={props.isBlue} />
            </div>
        </div>
    );
}

export default Buttons;