import React, { useReducer } from 'react'

const initialState = 0;
const reducer=(state,action)=>{
    switch (action){
        case "inc":
            return state+1

            case "drec":
                return state-1

    default:
        return state
    }
}  

function ExampleOne() {

    const [count, dispatch] = useReducer(reducer,initialState);
  return (
    <div>
        <h1>Use Reducer</h1>
        <p>count:{count}</p>
        <button onClick={()=>dispatch("inc")}>Increment</button>
        <button onClick={()=>dispatch("drec")}>drecrement</button>

    </div>
  )
}

export default ExampleOne