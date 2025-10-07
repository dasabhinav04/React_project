import React from 'react'

function ChildPc({children}){
    return (
        <div style={{background:'red'}}>
            <h1>Children</h1>
            {children}
        </div>
    )
}




// function ChildPc(props) {
//   return (
//     <div style={{background: "grey"}}>
//         <h1>Children</h1>
//         {props.children}
//     </div>
//   )
// }

export default ChildPc