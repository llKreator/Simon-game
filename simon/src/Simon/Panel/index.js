import React from 'react';
import Display from './Display/index.js';
import StartBTN from './StartBTN/index.js';
import StrictBTN from './StrictBTN/index.js';
import OnOffBTN from './OnOffBTN/index.js';
import './index.css';

const Panel = (props) => {
        return (
            <div className="panel">
                <h1 className="gameTitle">Simon</h1>
                <div className="panelRow">
                    <Display onOff={props.onOff} value={props.valueToDisplay}/>
                    <div className="controlBTNContainer">
                        <StartBTN onClick={props.start}/>
                        <h3 className="start">{props.isStart ? "Restart" : "Start"}</h3>
                    </div>
                    <div className="controlBTNContainer">
                        <div className={"strictIndicator " + (props.strictMode? 'strictModeOn': '')}></div>
                        <StrictBTN onClick={props.strictClick} />
                        <h3 className="strict">Strict</h3>
                    </div>
                </div>
                <OnOffBTN onOffClick = {props.onOffClick} onOff={props.onOff}/>
            </div>
        );
}

export default Panel;