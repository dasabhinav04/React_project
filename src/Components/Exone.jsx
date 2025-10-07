import React, { useEffect, useState } from 'react'

function Exone() {

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [sec, setSec] = useState(false);



    useEffect(() => {

        if(!isRunning){
            return
        }

        if(isRunning<=60){
            for(let i= 0; i>=60; i++){
                setSec(sec);
            }
            return
        }

          const intervalID = setInterval(
        function(){
            setTime(time+1);
        },100
    );

              return function(){
        clearInterval(intervalID)
    };

    }, [time, isRunning, sec])

    function handleStart(){
        setTime(time);
        setIsRunning(true);
    };

    function handleStop(){
        setIsRunning(false);
    }

  return (
    <div>
        <p>{sec}m:{time}s</p>
        <button onClick={handleStart}>Start Timer</button>
        <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default Exone