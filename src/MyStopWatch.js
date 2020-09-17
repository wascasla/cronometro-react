import React from 'react';
//import useStopwatch from './useStopwatch';
import { useStopwatch } from 'react-timer-hook';


const MyStopWatch = () => {

    const { seconds, minutes, hours, days, isRunning, start, pause, reset } = useStopwatch();

    return (
        <div style={{ textAlign: 'center' }}>

            <div style={{ fontSize: '100px', backgroundColor: seconds > 5 ? 'brown' : null }}>
                <span>{hours.toString().padStart(2, "0")} </span>:<span>{minutes.toString().padStart(2, "0")} </span>:<span>{seconds.toString().padStart(2, "0")} </span>
            </div>
            <p>{isRunning ? 'Runing' : 'Not Runing'} </p>
            <button onClick={start} >Start</button>
            <button onClick={pause} >Pause</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default MyStopWatch
