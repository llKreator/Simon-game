import React, { Component } from 'react';
import './index.css';
import Buttons from './Buttons/index.js';
import Panel from './Panel/index.js';

export class Simon extends Component {
    constructor() {
        super();

        this.showInterval = null;
    }
    state = {
        onOff: 'Off',
        valueToDisplay: '- -',
        isStart: false,
        count: 0,
        seriesOfButtons: null,
        userInputSeries: [],
        isGreen: false,
        isYellow: false,
        isRed: false,
        isBlue: false,
        audio: [
            new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
            new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
            new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
            new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
        ],
        userCanInput: false,
        waitForInputTimeout: null,
        strictModeOn: false,
    }
    toDefault = () => {
        this.setState({
            valueToDisplay: '- -',
            count: 0,
            seriesOfButtons: null,
            waitForInputTimeout: null,
            userCanInput: false,
            userInputSeries: []
        })
        clearInterval(this.showInterval);

        clearTimeout(this.state.waitForInputTimeout);
    }
    onOffHandler = () => {
        let newOnOff = this.state.onOff === 'On' ? 'Off' : 'On';
        this.setState({
            onOff: newOnOff,
        }, () => {
            if (this.state.onOff === "Off") {
                this.setState({
                    isStart: false
                })
                this.toDefault();
            }
        })
    }
    counting = () => {
        this.setState((prevState) => {
            return {
                valueToDisplay: (prevState.count + 1),
                count: (prevState.count + 1)
            }
        })
    }
    showSeries = () => {
        this.setState({
            userCanInput: false,
            userInputSeries: [],
        },
            () => {
                let i = 0;
                this.showInterval = setInterval(() => {
                    if (this.state.seriesOfButtons) {
                        if (this.state.seriesOfButtons[i] === 0) {
                            this.setState({
                                isGreen: true
                            })
                            this.state.audio[0].play();
                        } else if (this.state.seriesOfButtons[i] === 1) {
                            this.setState({
                                isRed: true
                            })
                            this.state.audio[1].play();
                        } else if (this.state.seriesOfButtons[i] === 2) {
                            this.setState({
                                isYellow: true
                            })
                            this.state.audio[2].play();
                        } else if (this.state.seriesOfButtons[i] === 3) {
                            this.setState({
                                isBlue: true
                            })
                            this.state.audio[3].play();
                        }
                        setTimeout(() => {
                            this.setState({
                                isGreen: false,
                                isYellow: false,
                                isRed: false,
                                isBlue: false
                            })
                        }, 500)

                        i = i + 1;
                        if (i === this.state.count) {
                            // clearInterval(int);
                            clearInterval(this.showInterval);
                            let tmt = setTimeout(this.showSeries, 5000);
                            this.setState({
                                userCanInput: true,
                                waitForInputTimeout: tmt
                            })
                        }
                    }
                }, 1000)
            })

    }
    start = () => {
        if (this.state.onOff === "On") {
            this.setState({ isStart: true });
            this.toDefault();
            this.seriesOfButtons();
            this.counting();
            this.showSeries();
        }
    }
    strictHandler = () => {
        this.setState({
            strictModeOn: this.state.strictModeOn ? false : true
        });
    }
    BTNMouseDownHandler = (e) => {
        if (this.state.userCanInput) {
            let userSeries = this.state.userInputSeries;
            switch (e.target.classList[0]) {
                case 'blue':
                    userSeries.push(3);
                    this.setState({ isBlue: true, userInputSeries: userSeries });
                    this.state.audio[3].play(); break;
                case 'red':
                    userSeries.push(1);
                    this.setState({ isRed: true, userInputSeries: userSeries });
                    this.state.audio[1].play(); break;
                case 'green':
                    userSeries.push(0);
                    this.setState({ isGreen: true, userInputSeries: userSeries });
                    this.state.audio[0].play(); break;
                case 'yellow':
                    userSeries.push(2);
                    this.setState({ isYellow: true, userInputSeries: userSeries });
                    this.state.audio[2].play(); break;
                default: console.log("ok");
            }
        }
    }
    BTNMouseUpHandler = () => {
        if (this.state.userCanInput) {
            this.setState({
                isGreen: false,
                isYellow: false,
                isRed: false,
                isBlue: false
            })
            let lastInput = this.state.userInputSeries[this.state.userInputSeries.length - 1],
                toCheck = this.state.seriesOfButtons[this.state.userInputSeries.length - 1];
            if (lastInput !== toCheck) {
                clearTimeout(this.state.waitForInputTimeout);
                this.setState({
                    valueToDisplay: "! !",
                    userCanInput: false
                })
                setTimeout(() => {
                    if (this.state.strictModeOn) {
                        this.start();
                    } else {
                        this.setState({ valueToDisplay: this.state.count });
                        this.showSeries();
                    }
                }, 1000)
            } else {
                if (this.state.userInputSeries.length === this.state.count) {
                    this.showSeries();
                    this.counting();
                    clearTimeout(this.state.waitForInputTimeout);
                    return;
                }
                clearTimeout(this.state.waitForInputTimeout);
                let tmt = setTimeout(this.showSeries, 5000);
                this.setState({ waitForInputTimeout: tmt })
            }
        }
    }
    seriesOfButtons = () => {
        let sob = [], n;

        for (let i = 0; i < 20; i++) {
            n = Math.floor(Math.random() * 4);
            sob.push(n);
        }
        this.setState({
            seriesOfButtons: sob
        })
    }
    render() {
        return (
            <div id='Simon'>
                <Buttons
                    isGreen={this.state.isGreen}
                    isRed={this.state.isRed}
                    isYellow={this.state.isYellow}
                    isBlue={this.state.isBlue}
                    onClick={this.BTNMouseDownHandler}
                    onMouseUp={this.BTNMouseUpHandler}
                />
                <Panel
                    valueToDisplay={this.state.valueToDisplay}
                    onOffClick={this.onOffHandler}
                    onOff={this.state.onOff}
                    start={this.start}
                    strictClick={this.strictHandler}
                    strictMode={this.state.strictModeOn}
                    isStart={this.state.isStart}
                />
            </div>
        )
    }
}