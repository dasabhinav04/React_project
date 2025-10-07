import React, { memo } from 'react'

function Child({callme}) {
    console.log("child");
  return (
    <div>
        <button onClick={callme}>Click me
    
        </button>
    </div>
  )
}

export default memo (Child)