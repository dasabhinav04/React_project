import React from 'react'
import ChildDest1 from './ChildDest1'

function ParentDest1() {
    var stud_data ="sam"
    var stud_city = "Mumbai"  
  return (
    <div>
        <ChildDest1 stud_data = {stud_data} stud_city = {stud_city}/>
    </div>
  )
}

export default ParentDest1