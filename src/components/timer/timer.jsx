import React from 'react';
//style
import './timer.css';

const Timer = (props) => {
    return (
        <div className='timer'>
            <span className='digits minutes'>
                {('0' + Math.floor((props.time / 60000) % 60)).slice(-2)}:
            </span>
            <span className='digits sec'>
                {('0' + Math.floor((props.time / 1000) % 60)).slice(-2)}.
            </span>
            <span className='digits mili-sec'>
                {('0' + ((props.time / 10) % 100)).slice(-2)}
            </span>
        </div>
    );
}

export default Timer;