import React, { useContext } from 'react'
import { data, data2} from '../../../App'


function ChildC() {
    const userdata = useContext(data)
    const contact = useContext(data2)
  return (                      
    <div>
        <h1>Child C</h1>
        <p>My name is {userdata.name}, <br />
        My age is {userdata.age}, <br />
        I live in {userdata.city}, <br />
        My contact number is {contact}</p>
    </div>
  )                     
}

export default ChildC