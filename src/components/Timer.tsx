// import * as React from "react";
// import {useEffect, useState} from "react";
// import {clearInterval} from "timers";

// const Timer = () => {
//     const [seconds, setSeconds] = useState(0)
//     const [isRunning, setIsRunning] = useState(false)
//
//     useEffect(() => {
//         if (!isRunning) return
//         let timeoutId = window.setInterval(() => {setSeconds((prevState) => prevState + 1)}, 1000)
//
//         return () => {
//             clearInterval(timeoutId)
//         }
//
//     }, [isRunning])
//
//     const toggleTimer = () => {
//         if (isRunning) setIsRunning(false)
//         else setIsRunning(true)
//     }
//
//     return (
//         <div className="timer">
//             <p>{seconds}</p>
//             <button onClick={toggleTimer}>start</button>
//             <button onClick={toggleTimer}>stop</button>
//         </div>
//     )
// }

// export default Timer