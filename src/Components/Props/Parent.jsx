import React from 'react'
import Child from './Child'
import newImg from '../../assets/Images/Part1.jpg'

function Parent() {
    const name = "Abhinav";
    let lname = "Das";
    let uage = 27;
    let uprofile = "https://cdn.pixabay.com/photo/2025/08/11/07/18/nurturing-swan-9767495_1280.jpg";
    let uimage = '/src/assets/Images/Part2.jpg'
  return (
    <div>
        <h2>Parent</h2>
        <Child name={name} lname={lname} age={uage} profile={uprofile} newImg ={newImg} uimage={uimage}/>
    </div>
  )
}

export default Parent