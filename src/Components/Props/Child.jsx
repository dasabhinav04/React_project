import React from 'react'

function Child(abhi) {
  return (
    <div>
        <p>Name: {abhi.name}</p>
        <p>Last Name:{abhi.lname}</p>
        <p>Age: {abhi.age}</p>
        <img src={abhi.profile} alt='Image1' width="300"/>
        <img src={abhi.newImg} alt='Image2' width="300"/>
        <img src={abhi.uimage} alt='Image3' width="300"/>
        


    </div>
  )
}

export default Child
