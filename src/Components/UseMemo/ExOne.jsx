import React, { useMemo, useState } from 'react'

function ExOne() {
const [add, setAdd] = useState(0);
const [sub, setSub] = useState(50);

 const abc = useMemo(() =>{
    console.log("****")
        return add *4;
 }, [add])

    // const abc = () =>{
    //     console.log("****")
    //     return add *4;
    // }
  return (
    <div>
        <h1>UseMemo</h1>
        <p>{add}</p>
        <p>{sub}</p>
        {/* call normally when using memo no need to call function */}
        <p>{abc}</p> 
        <button onClick={()=>setAdd(add+1)}>Add</button>
        <button onClick={()=>setSub(sub-1)}>Sub</button>

    </div>
  )
}

export default ExOne