import React from 'react';
import useStopwatch from './useStopwatch';
//import { useStopwatch } from 'react-timer-hook';


const MyStopWatch = () => {

    const {seconds, minutes, milliSeconds, hours, days, isRunning, start, pause, reset} = useStopwatch();

    return (
        <div style={{textAlign: 'center'}}>
            
            <div style={{fontSize: '100px'}}>
                <span>{days} </span>:<span>{hours} </span>:<span>{minutes} </span>:<span>{seconds} </span>: <span>{milliSeconds} </span>
            </div>
            <p>{isRunning ? 'Runing' : 'Not Runing'} </p>
            <button onClick={start} >Start</button>
            <button onClick={pause} >Pause</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default MyStopWatch
