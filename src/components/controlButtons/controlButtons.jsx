import React from 'react';
//style
import './controlButtons.css';

const ControlButtons = (props) => {
    //constances
    const StartButton = (
        <div className="btn btn-one btn-start"
            onClick={props.handleStart}>
            Start
        </div>
    );
    const ActiveButtons = (
        <div className="btn-grp">
            <div className="btn btn-two"
                onClick={props.handleReset}>
                Reset
            </div>
            <div className="btn btn-one"
                onClick={props.handlePauseResume}>
                {props.isPaused ? "Resume" : "Pause"}
            </div>
        </div>
    );

    return (
        <div className="controlButtons">
            <div>{props.active ? ActiveButtons : StartButton}</div>
        </div>
    );
}

export default ControlButtons;