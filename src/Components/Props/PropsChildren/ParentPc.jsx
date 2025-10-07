import React from 'react'
import ChildPc from './ChildPc'

function ParentPc() {
  return (
    <div style={{background:'blue', color: 'white'}}>
        <h1>Parent Children</h1>

        <ChildPc>
            <h1>I am Children</h1>
            <img src="https://cdn.pixabay.com/photo/2023/11/29/11/05/evening-8419361_1280.jpg" alt="" width ="300" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Qui alias sequi doloremque maxime porro saepe dignissimos iste corporis maiores? 
                A minima reiciendis fuga veniam atque esse, porro voluptate tempore suscipit!</p>
        </ChildPc>
    </div>
  )
}


export default ParentPc