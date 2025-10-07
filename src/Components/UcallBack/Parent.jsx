import React, { useCallback, useState } from 'react'
import Child from './Child';

function Parent() {
    const [count, setCount] = useState(0);

    // const handleClick =()=>{
    //     setCount((e) => e + 1)
    // }

    const exm = useCallback(()=>{
        setCount((e) => e+1)
    },[count])
  return (
    <div>
        <h1>Call Back</h1>
        <p>Count:{count}</p>
        <Child callme={exm}/>
    </div>
  )
}

export default Parent